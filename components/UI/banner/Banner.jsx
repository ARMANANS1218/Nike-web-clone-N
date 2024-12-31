/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

const localDataCarousel = [
  { id: 2, Image: "/assets/slide-1.png" },
  { id: 3, Image: "/assets/slide-2.png" },
  { id: 5, Image: "/assets/slide-3.png" },
];

const Banner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1280px] mx-auto ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              onClick={clickHandler}
              className="absolute right-[30px] md:right-[50px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasPrev) => {
          return (
            <div
              onClick={clickHandler}
              className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm rotate-180 md:text-lg" />
            </div>
          );
        }}
      >
        {localDataCarousel.map((carousel) => {
          return (
            <div key={carousel.id}>
              <Image
                width={1280}
                height={1024}
                src={carousel.Image}
                alt="slide"
                className="aspect-[14/8] md:aspect-auto sm:object-cover h-[200px] mob:h-[270px] sm:h-[400px] md:h-[550px]"
              />
              <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                Shop now
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
