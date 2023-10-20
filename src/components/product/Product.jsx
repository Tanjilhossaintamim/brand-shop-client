import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/features/brand/brandApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { productslidersettings } from "../../utils/sliderSettings";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Sekeleton from "../sekeleton/Sekeleton";

const Product = () => {
  const { brandName } = useParams();
  const { data, isLoading } = useGetProductsQuery(brandName);
  let content = null;
  if (isLoading) {
    content = (
      <div className="flex items-center gap-4">
        <Sekeleton />
        <Sekeleton />
        <Sekeleton />
      </div>
    );
  }
  if (data?.length == 0) {
    content = (
      <div className="text-3xl font-bold text-center">
        No Products Available !
      </div>
    );
  }
  if (data?.length > 0) {
    content = data.map((product) => (
      <SwiperSlide key={product._id} loop={true} className="mySwiper">
        <div className="w-[400px] h-[480px]">
          <div className=" w-full h-2/3">
            <img src={product.image} alt="" className="w-full object-cover" />
          </div>
          <div className="flex flex-col text-start justify-start gap-1 text-color-black h-1/3">
            <h1>Name: {product.name}</h1>
            <h5>Brand: {product.brandName}</h5>
            <div className="flex gap-2">
              {Array.from(
                { length: Math.round(product.rating) },
                (v, k) => k
              ).map((star, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                    fill="#FF8C47"
                  />
                </svg>
              ))}
              <span>{product.rating}.0</span>
            </div>
            <div className="flex  items-center">
              <Link to={`/products/${brandName}/${product._id}`}>
                <button className="bg-blue-700 px-3 py-1 text-white rounded-3xl mr-2">
                  Details
                </button>
              </Link>
              <Link to={`/products/update/${product._id}`}>
                <button className="bg-green-700 px-3 py-1 text-white rounded-3xl">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));
  }

  return (
    <div className="min-h-[50vh] py-10 px-4 lg:px-0">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-4xl mb-4">Products of <span className="text-color-orange">{brandName}</span></h1>
        <Swiper
          {...productslidersettings}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 1000, pauseOnMouseEnter: true }}
        >
          {content}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
