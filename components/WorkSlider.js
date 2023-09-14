// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "(ChatPro)",
          path: "/chatPro.png",
          link: "https://github.com/WalterRodriguez24/chatpro.git",
        },
        {
          title: "CV",
          path: "/cv.png",
          link: "https://walterrodriguez24.github.io/walterRodriguezCV/",
        },
        
        {
          title: "Portafolio-web",
          path: "/portafolio.png",
          link: "https://github.com/WalterRodriguez24/Portfolio.git",
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Pagination } from "swiper";
import Image from "next/image";

//icons
import { BsArrowRight } from "react-icons/bs";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider = () => {


  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer ">
              
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group rounded-md" >
                      {/* image */}

                      <a href={image.link} target="_blank" rel="noopener noreferrer" class="target-blank">

                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />

                      </a>
                    
                      
                   
                      {/* title */}
                      <div className="absolute text-accent bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">Link</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            <a>{image.title}</a>
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight href={image.link} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
