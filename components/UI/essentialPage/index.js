import Image from "next/image";
import React from "react";

const EssentialPage = () => {
  return (
    <>
      <h2 className="text-[25px] md:text-[40px] my-10">Sport Essentials</h2>
      <div className="flex my-10 flex-col md:flex-row">
        <div className="my-4 md:my-0 mx-1">
          <div className="relative w-full h-[352px] md:h-[652px]">
            <Image
              src="/assets/ess-1.png"
              alt="image"
              width={600}
              height={652}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/[0.5]  p-4 flex flex-col justify-end items-baseline">
              <p className="text-white text-[20px] w-[200px]">
                Nike Running's Latest Shoes
              </p>
              <button className="px-4 py-2 mt-2 bg-white rounded-full  font-medium transition-transform active:scale-95 my-4 hover:opacity-75 ">
                Shop
              </button>
            </div>
          </div>
        </div>
        <div className="my-4 md:my-0 mx-1">
          <div className="relative w-full h-[352px] md:h-[652px]">
            <Image
              src="/assets/ess-2.png"
              alt="image"
              width={600}
              height={652}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/[0.5] p-4 flex flex-col justify-end items-baseline">
              <p className="text-white text-[20px] w-[200px]">
                Nike Basketball's Latest Shoes
              </p>
              <button className="px-4 py-2 mt-2 bg-white rounded-full  font-medium transition-transform active:scale-95 my-4 hover:opacity-75  ">
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 ">
        <h2 className="text-[25px] md:text-[40px] my-10">Nike Membership</h2>
        <div className="relative  w-full h-[350px]">
          <Image
            src="/assets/nikecover.png"
            alt="cover"
            width={1600}
            height={420}
            className="w-full h-full object-cover "
          />
          <div className="absolute left-0 top-0 text-white py-16 px-10 bg-black/[0.5] md:bg-transparent w-full h-full">
            <h2 className=" text-[25px] md:text-[55px] md:w-[300px] leading-[35px] md:leading-[60px] uppercase">
              Become A Member
            </h2>
            <p className="my-3 w-[200px] md:w-auto">
              Sign up for free. Join the community.
            </p>
            <div>
              <button className="px-4 py-2 mt-2 bg-white rounded-full  font-medium transition-transform active:scale-95 my-4 hover:opacity-75  text-black mr-4">
                Join Us
              </button>
              <button className="px-4 py-2 mt-2 bg-white rounded-full  font-medium transition-transform active:scale-95 my-4 hover:opacity-75  text-black">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EssentialPage;
