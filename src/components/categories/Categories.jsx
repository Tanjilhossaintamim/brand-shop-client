import { Swiper, SwiperSlide } from "swiper/react";
import categories from "../../utils/categoryData";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderSettings } from "../../utils/sliderSettings";

const Categories = () => {
  return (
    <div className="bg-white py-5">
      <div className="max-w-[1440px] mx-auto">
        <Swiper
          {...sliderSettings}
          autoplay={{ delay: 1000 }}
          loop={true}
          navigation={true}
          className="mySwiper"
          modules={[Navigation, Autoplay]}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div>
                <div className="w-[212px] rounded-full">
                  <img
                    src={category.image}
                    alt=""
                    className="w-full object-cover rounded-full"
                  />
                  <h1>{category.name}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
