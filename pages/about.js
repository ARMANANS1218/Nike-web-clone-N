import AboutHeadquarters from "@/components/UI/aboutHeadquarters/AboutHeadquarters";
import Leadership from "@/components/UI/leadership/Leadership";
import PageWrapper from "@/components/layout/PageWrapper";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <PageWrapper>
        <div className="mt-20">
          <h2 className="font-semibold  text-2xl md:text-4xl md:mx-auto md:text-center w-full md:max-w-[850px] mb-10">
            NIKE, Inc. is a team comprised of the Nike, Jordan and Converse
            brands driven by a shared purpose to leave an enduring impact.
          </h2>
          <p className="mb-4 text-md md:text-xl text-gray-500">
            1. Welcome to the Nike Store, where you can find a wide range of
            stylish and high-quality shoes to suit your needs. We are passionate
            about delivering the best footwear options for our customers.
          </p>
          <p className="mb-4 text-md md:text-xl  text-gray-500">
            2. Our collection includes various Nike shoe models, from running
            shoes to basketball shoes, sneakers, and more. We strive to provide
            the latest designs and ensure customer satisfaction with each
            purchase.
          </p>
          <p className="mb-4 text-md md:text-xl  text-gray-500">
            3. At Nike Store, we prioritize comfort, performance, and style. Our
            team of experts is dedicated to helping you find the perfect pair of
            shoes that meet your preferences and requirements.
          </p>
          <p className="mb-4 text-md md:text-xl  text-gray-500">
            4. Thank you for choosing Nike Shoes Store. We look forward to
            serving you and ensuring an exceptional shoe shopping experience.
          </p>
        </div>
        <div>
          <h5 className="mt-20 text-3xl font-semibold">Who We Are</h5>
          <Image
            src="/assets/nike-cover.jpg"
            alt="cover"
            width={1280}
            height={740}
            className="mob:object-cover sm:object-contain mob:h-[250px] sm:h-auto"
          />
          <div className="w-full flex  justify-end">
            <h6 className=" md:max-w-[700px] text-lg mob:text-xl md:text-3xl font-medium">
              With a global footprint, culture of innovation and team-first
              mentality, we take action to create a future of continual progress
              for athletes, sport and our world.
            </h6>
          </div>
        </div>
        <div>
          <h5 className="mt-20 text-3xl font-semibold">At a Glance</h5>
          <div
            className="flex flex-wrap mt-5 justify-between"
            style={{ fontFamily: "Anton" }}
          >
            <div className="w-full md:w-1/2 lg:w-1/3 ">
              <h6 className="font-[900] text-[40px] md:text-[60px] lg:text-[80px] my-10">
                $97.7M
              </h6>
              <p className="text-sm max-w-[300px]">
                invested in NIKE, Inc.'s fiscal year 2021 to drive positive
                impact in communities around the world.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 ">
              <h6 className="font-[900] text-[40px] md:text-[60px] lg:text-[80px] my-10">
                78%
              </h6>
              <p className="text-sm max-w-[300px]">
                renewable energy in owned or operated facilities, up from 48% in
                FY20.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 ">
              <h6 className="font-[900] text-[40px] md:text-[60px] lg:text-[80px] my-10">
                43%
              </h6>
              <p className="text-sm max-w-[300px]">
                of NIKE’s leadership positions are held by women.
              </p>
            </div>
          </div>
        </div>
        <Leadership />
        <AboutHeadquarters />
        <div className="flex flex-col md:flex-row justify-between mt-20">
          <div className="w-full md:w-2/3">
            <h6 className="text-[25px] sm:text-[30px]  lg:text-[50px] leading-[30px] sm:leading-[50px] font-bold max-w-[650px]">
              Play "Your Move" to see how Nike, Inc. is creating bigger change
            </h6>
            <p className="mt-5 text-lg font-medium">Launch Website </p>
          </div>
          <div className="w-full md:w-1/3 mt-5 md:mt-0">
            <Image
              src="/assets/gamechange.jpg"
              alt="gamechange"
              width={400}
              height={300}
              className="w-full"
            />
          </div>
        </div>
        <div className="py-5">
          <h5 className="mt-20 mb-5 text-3xl font-semibold">Read more</h5>
          <div className="flex flex-wrap">
            <div className="mob:w-1/2 md:w-1/3 mt-5 md:mt-0 px-3">
              <Image
                src="/assets/readmore1.jpg"
                alt="read more "
                width={400}
                height={300}
              />
              <p className="text-sm my-2">Release</p>
              <h4 className="sm:text-xl lg:text-2xl font-bold max-w-[300px]">
                With Second Cohort, Nike Athlete Think Tank Deepens Commitment
                to Champion Women’s Sport
              </h4>
            </div>
            <div className="mob:w-1/2 md:w-1/3 mt-5 md:mt-0 px-3">
              <Image
                src="/assets/readmore.jpg"
                alt="read more "
                width={400}
                height={300}
              />
              <p className="text-sm my-2">Release</p>
              <h4 className="mob:text-sm sm:text-xl lg:text-2xl font-bold max-w-[300px]">Nike Basketball Adds Ja Morant to Its Signature Roster</h4>
            </div>
            <div className="mob:w-1/2 md:w-1/3 mt-5 md:mt-0 px-3">
              <Image
                src="/assets/readmore2.jpg"
                alt="read more "
                width={400}
                height={300}
              />
              <p className="text-sm my-2">Release</p>
              <h4 className="sm:text-xl lg:text-2xl font-bold max-w-[300px]">
                Nike Launches First Hydrogen-Powered Inland Container Ship
              </h4>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default About;
