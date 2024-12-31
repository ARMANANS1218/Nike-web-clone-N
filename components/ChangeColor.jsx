import Image from "next/image";
import React from "react";

const ChangeColor = ({ singleProduct, setCarouselImage }) => {
  const colors = Object.entries(singleProduct.colors);

  return (
    <div className="my-5 flex ">
      {colors.map((color, index) => {
        return (
          <Image
            onClick={() => setCarouselImage(color[1])}
            key={index}
            src={color[1][0]}
            alt="color image"
            width={60}
            height={30}
            className="rounded-lg border border-black/[0.5] mx-1 opacity-80  cursor-pointer hover:opacity-100 transition duration-200 "
          />
        );
      })}
    </div>
  );
};

export default ChangeColor;
