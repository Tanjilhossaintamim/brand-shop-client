import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import categories from "../../utils/categoryData";
import { Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderSettings } from "../../utils/sliderSettings";

const Categories = () => {
  const swiper = useSwiper();
  return (
    <div className="bg-white py-5">
      <div className="max-w-[1440px] mx-auto relative">
        <Swiper
          {...sliderSettings}
          autoplay={{ delay: 1000 }}
          loop={true}
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperButton />
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div>
                <div className="w-[212px] rounded-full">
                  <img
                    src={category.image}
                    alt=""
                    className="w-full object-cover rounded-full"
                  />
                  <h1 className="text-color-black font-medium">
                    {category.name}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between items-center">
      <button
        className="absolute w-3 h-3 top-1/2 z-40 font-bold flex justify-center items-center rounded-full p-2 hover:bg-color-orange hover:text-white"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="absolute w-3 h-3 top-1/2 right-10 z-40 font-bold flex justify-center items-center rounded-full p-2 hover:bg-color-orange hover:text-white"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};

export default Categories;
