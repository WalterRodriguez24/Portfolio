// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "User Interface (UI) Development",
    description: "I design the visual part of web applications and sites, creating attractive and functional elements.",
  },
  {
    icon: <RxPencil2 />,
    title: "User Experience (UX) Development",
    description: "Improving usability and accessibility so that users interact efficiently and enjoy the experience.",
  },
  {
    icon: <RxDesktop />,
    title: "Responsive Web Page Development",
    description: "Design websites that adapt to different screen sizes, such as computers, tablets, and mobile phones.",
  },
  {
    icon: <RxReader />,
    title: "Testing and Debugging",
    description: "Verification that the site works correctly on different browsers and devices.",
  },
  
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { FreeMode, Pagination } from "swiper";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              {/* icon */}
              <div className="text-accent mb-2">{item.icon}</div>
              {/* ttile * desc */}
              <div className='mb-4'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl ">
                <RxArrowRight className=' -rotate-45 group-hover:rotate-0 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
