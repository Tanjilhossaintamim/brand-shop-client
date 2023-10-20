import { useParams } from "react-router-dom";
import {
  useAddToCartMutation,
  useGetProductQuery,
} from "../../redux/features/brand/brandApi";
import DetailSekeleton from "../../components/sekeleton/DetailSekeleton";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetProductQuery(id);
  const { image, _id, price, name, description, type } = data || {};
  const [addToCart, { data: cartData, isSuccess }] = useAddToCartMutation();

  useEffect(() => {
    if (isSuccess) {
      if (cartData?.insertedId) {
        Swal.fire({
          title: "Success",
          text: "Add To Cart Successfully !",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Error !",
          text: "You Already Add this Product !",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handelAddToCart = () => {
    const cartInfo = {
      image,
      price,
      name,
      type,
      email: user?.email,
    };
    addToCart({ _id, cartInfo });
  };
  let content = null;
  if (isLoading) {
    content = <DetailSekeleton />;
  }

  if (_id) {
    content = (
      <>
        <div className="lg:w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="lg:w-1/2 px-4 flex flex-col gap-2 text-color-black">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h6 className="text-xl font-bold text-green-700">${price}</h6>
          <p>{description}</p>
          <button
            onClick={handelAddToCart}
            className="w-[100px] h-[40px] bg-blue-700 text-white rounded"
          >
            Add To Cart
          </button>
        </div>
      </>
    );
  }
  if (!_id) {
    content = (
      <div className="text-3xl font-bold text-center">No Product Found !</div>
    );
  }

  return (
    <div>
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between">
        {content}
      </div>
    </div>
  );
};

export default Details;
