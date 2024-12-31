import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const ProductDetailsCarousel = ({ carouselImage }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1280px] mx-auto sticky top-[50px] ">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {carouselImage &&
          carouselImage.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="img carousel"
              className="h-[600px]"
            />
          ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
