import { useSelector } from "react-redux";
import {
  useDeleteToCartMutation,
  useGetCartItemQuery,
} from "../../redux/features/brand/brandApi";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Cart = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetCartItemQuery(user.email);
  const [deleteToCart, { isSuccess }] = useDeleteToCartMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success !",
        text: "Deleted Successfully !",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  }, [isSuccess]);
  const handelDelete = (id) => {
    Swal.fire({
      title: "Warning !",
      text: "Are You Sure To Delete This Product !",
      icon: "warning",
      confirmButtonText: "Ok",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        deleteToCart(id);
      }
    });
  };

  let content = null;
  if (data?.length > 0) {
    content = data.map((item) => (
      <tr key={item._id} className="hover:bg-gray-100 ">
        <td className="p-4 w-4">
          <img src={item.image} alt="" className="w-20 h-20 object-cover" />
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
          {item.name}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
          {item?.type}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
          {item.price}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
          <span
            onClick={() => handelDelete(item._id)}
            className="text-red-600  hover:underline cursor-pointer"
          >
            Delete
          </span>
        </td>
      </tr>
    ));
  } else {
    content = (
      <div className="text-xl font-bold text-center py-2">
        No Product in Your Cart !
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto min-h-[50vh]">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed ">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                    >
                      Price
                    </th>
                    <th scope="col" className="p-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {content}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
