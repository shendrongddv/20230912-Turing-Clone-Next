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

// Dummy
import { dummyReviewUser } from "@/config/dummy";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export const UserReview = () => {
  const items = dummyReviewUser;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      // loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // centeredSlides={true}
      // effect={"fade"}
      // navigation
      // pagination={{ clickable: true }}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },

        1140: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      className="AAA"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="BBB w-full max-md:px-4">
          <SlideSingle
            name={item.name}
            country={item.country}
            job={item.job}
            media={item.media}
            review={item.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Components
type SlideSingleProps = {
  name: string;
  country: string;
  job: string;
  media: string;
  review: string;
};

const SlideSingle = ({
  name,
  country,
  job,
  media,
  review,
}: SlideSingleProps) => {
  return (
    <div className="group relative isolate aspect-1 overflow-hidden rounded-xl">
      {/* Image */}
      <Image
        src={`/${media}`}
        alt={name}
        width={400}
        height={400}
        className="absolute inset-0 z-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/70"></div>

      {/* Content */}
      <div className="absolute inset-6 z-[2] flex flex-col gap-2">
        <span className="text-xs font-bold text-background">
          {name},&nbsp;{country}
        </span>
        <span className="text-sm text-background/80">{job}</span>
        <p className="mt-auto font-semibold italic text-background">
          &quot;{review}&quot;
        </p>

        <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-background">
          <PlayCircle className="h-4 w-4" />
          Watch Video
        </div>
      </div>
    </div>
  );
};
