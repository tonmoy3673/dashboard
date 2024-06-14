/* eslint-disable react/prop-types */

import { Link, useLoaderData } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlider.css";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
};
const Books = () => {
    const data=useLoaderData();
  return (
    <div className="pt-6">
        <h2 className="text-lg lg:text-3xl 2xl:text-[36px] font-semibold text-[#00897B] text-center  mt-8 md:mt-16">Our Library </h2>
      <Swiper
        // spaceBetween={5}
        modules={[Autoplay, Navigation]}
        breakpoints={breakpoints}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={false}
      >
        {Array.isArray(data) && data?.map(({ image_url, _id }) => (
          <SwiperSlide
            key={_id}
            className={`text-center py-8 md:py-12 mb-2`}
          >
            <div className=" h-[240px] md:h-[264px] mx-auto !rounded-md">
                  
              
                <div className="overflow-hidden">
                <img src={image_url} alt="books" className="!w-full  !rounded-md transform duration-300 transition-transform hover:scale-125 !h-[240px] !md:h-[364px] object-contain" />
                </div>
               
              
              <div className="">
              
               
                <div className="card-actions justify-center mt-4">
                  <Link to={`/books/${_id}`}>
                    <button className="btn hover:bg-warning bg-[#00897B] text-white">
                      Details
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default Books;
