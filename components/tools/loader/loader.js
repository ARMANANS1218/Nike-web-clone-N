import Image from "next/image";
import React from "react";
const LoadingIndicator = () => {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src="/gif/NikeAlphaballer.gif"
        alt="GIF"
        width={1280}
        height={740}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default LoadingIndicator;
