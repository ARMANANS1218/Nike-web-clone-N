import Image from "next/image";
import React from "react";

const MembershipPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 md:mr-5 my-4 md:my-0">
        <Image
          src="/assets/membership-1.png"
          alt="membership"
          width={600}
          height={550}
          className="w-full  object-cover object-top h-[350px] md:h-full"
        />
        <div>
          <h2 className="text-sm my-2">Member Shop</h2>
          <p className="text-lg font-medium my-2">
            Shop Member-exclusive styles.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 md:mr-5 my-4 md:my-0">
        <Image
          src="/assets/membership-2.png"
          alt="membership"
          width={600}
          height={550}
          className="w-full  object-cover object-top h-[350px] md:h-full"
        />
        <div>
          <h2 className="text-sm my-2">Shipping as It Should Be</h2>
          <p className="text-lg font-medium my-2">
            Free shipping on orders $50+
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3  my-4 md:my-0">
        <Image
          src="/assets/membership-3.png"
          alt="membership"
          width={600}
          height={550}
          className="w-full  object-cover object-top h-[350px] md:h-full"
        />
        <div>
          <h2 className="text-sm my-2">Nike By You</h2>
          <p className="text-lg font-medium my-2">
            {" "}
            Customize your so-you shoe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
