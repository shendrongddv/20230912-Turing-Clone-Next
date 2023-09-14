"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper CSS
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Swiper Modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

// Components
import { CompanyCard } from "./company-card";

// Dummy
import { dummyReviewCompanies } from "@/config/dummy";

export const CompanyReview = () => {
  const items = dummyReviewCompanies;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      centeredSlides={true}
      // effect={"fade"}
      // navigation
      // pagination={{ clickable: true }}
      breakpoints={{
        360: {
          slidesPerView: "auto",
          spaceBetween: 0,
        },
        640: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },

        1140: {
          slidesPerView: "auto",
          spaceBetween: 24,
        },
      }}
      className="AAA"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="BBB">
          <CompanyCard
            label={item.label}
            media={item.media}
            review={item.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
