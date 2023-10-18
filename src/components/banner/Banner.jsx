import BannerImg from "../../assets/elegant-smartphone-composition_23-2149437082.jpg";
import BannerImg2 from "../../assets/elegant-smartphone-composition.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <Swiper
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Navigation, Pagination, EffectFade]}
      autoplay={{ delay: 1000 }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="min-h-[500px] flex items-center"
          style={{
            background: `url(${BannerImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="px-4">
            <h1 className="text-4xl font-bold text-[#FF4E00]">Offer Running</h1>
            <h1 className="text-4xl font-bold">I Phone 14 pro max</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="min-h-[500px] flex items-center"
          style={{
            background: `url(${BannerImg2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
          <div className="px-4">
            <h1 className="text-4xl font-bold text-blue-700">On Tranding</h1>
            <h1 className="text-4xl font-bold">I Phone 15 pro max</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
