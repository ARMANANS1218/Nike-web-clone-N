import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import PageWrapper from "@/components/layout/PageWrapper";

const Landing = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoAnimation = gsap.fromTo(".video-section", {}, { duration: 1 });

    const contentAnimation = gsap.fromTo(
      ".content-section",
      { y: 250 },
      { y: 0, duration: 1 }
    );

    ScrollTrigger.create({
      trigger: ".video-section",
      animation: videoAnimation,
      start: "top center",
      end: "bottom center",
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: ".video-section",
      animation: contentAnimation,
      start: "top center",
      end: "bottom center",
      scrub: true,
    });
  }, []);

  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden">
      <div className="header h-[40vh] lg:h-[80vh] flex flex-col sm:flex-row items-center justify-center">
        <h2
          className="text-white-[0.8] font-bold leading-[80px] lg:leading-[120px] text-[50px] mob:tet-[70px] lg:text-[120px] uppercase text-center"
          style={{ fontFamily: "Anton" }}
        >
          Welcome to Nike
        </h2>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={200}
          height={100}
          className="w-[100px] h-[50px] md:w-[200px] md:h-[100px] invert ml-5  xl:ml-10 mt-10  sm:mt-0"
        />
      </div>

      <div className="video-section lg:h-screen relative ">
        <video
          src="/video/landing.webm"
          autoPlay
          loop
          muted
          className="w-full h-[300px] mob:h-full object-cover"
        />
        <div className="bg-black/[0.4] absolute left-0 top-0 w-full h-full"></div>
        <div className="content-overlay absolute inset-0 left-10 -top-[200px] z-10 hidden lg:block">
          <div className="flex items-center " style={{ fontFamily: "Anton" }}>
            <div className="text-[200px] relative max-h-[115vh] overflow-y-auto scrollbar-hide">
              <h2 className="text-[40px] mt-20 mb-5">Our Mission</h2>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                BRING
              </span>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                INSPIRATION
              </span>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                AND
              </span>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                INNOVATION
              </span>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                TO
              </span>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                EVERY
              </span>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                ATHLETE*
              </span>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                IN THE
              </span>
              <span className="block text-white/[0.8] font-bold leading-[190px]">
                WORLD
              </span>
              <p className="text-[30px] mt-5">
                *If you have a body, you are an athlete
              </p>
              <p className="h-[700px]"></p>
            </div>
          </div>
        </div>
      </div>
      <PageWrapper>
        <div className="flex justify-end mt-[100px] end-fixation">
          <p className="w-full md:w-2/3 text-[20px] mob:text-[30px] md:text-[40px] lg:text-[55px] leading-[40px] md:leading-[50px] lg:leading-[70px]">
            We champion continual progress for athletes and sport by taking
            action to help athletes reach their potential. Every job at NIKE,
            Inc. is grounded in a team-first mindset, cultivating a culture of
            innovation and a shared purpose to leave an enduring impact.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between my-20">
          <div className="w-full lg:w-1/3 lg:mx-10">
            <h4 className="text-[25px] sm:text-[35px] font-semibold leading-[30px] sm:leading-[45px]">
              Stories, Volume 2: A Culture of Innovation
            </h4>
            <p className="text-gray-500 mt-3">Explore the latest stories </p>
          </div>
          <div className="w-full mt-5 lg:mt-0 lg:w-2/3">
            <Image
              src="/assets/about1.jpg"
              alt="about"
              width={991}
              height={420}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between my-20">
          <div className="w-full lg:w-2/3">
            <Image
              src="/assets/about2.jpg"
              alt="about"
              width={991}
              height={420}
            />
          </div>
          <div className="w-full mt-5  lg:mt-0  lg:w-1/3 lg:mx-10">
            <h4 className="text-[25px] sm:text-[35px] font-semibold leading-[30px] sm:leading-[45px]">
              Our Impact: Breaking Barries Since 1972
            </h4>
            <p className="text-gray-500 mt-3">Explore our purpose</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between my-20">
          <div className="w-full lg:w-1/3 lg:mx-10">
            <h4 className="text-[25px] sm:text-[35px] font-semibold leading-[30px] sm:leading-[45px]">
              NIKE, Inc: Keeping athletes at the center of everything we do.
            </h4>
            <p className="text-gray-500 mt-3">Learn more about NIKE, Inc. </p>
          </div>
          <div className="w-full mt-5 lg:mt-0 lg:w-2/3">
            <Image
              src="/assets/about3.jpg"
              alt="about"
              width={991}
              height={420}
            />
          </div>
        </div>
        <div className="flex justify-end mt-[100px]">
          <p className="w-full text-[30px] md:text-[40px] lg:w-2/3 lg:text-[55px] leading-[30px] md:leading-[50px] lg:leading-[70px]">
            The latest from the NIKE, Inc. Newsroom:
          </p>
        </div>
        <div className="mt-[100px] flex flex-col md:flex-row md:flex-wrap justify-between lg:justify-normal lg:flex-nowrap">
          <div className="w-full md:w-[45%] lg:w-1/3 mr-0 lg:mr-6 mt-5 lg:mt-0">
            <Image
              src={"/assets/aboutblock1.png"}
              alt=""
              width={400}
              height={350}
              className="mb-5 w-full md:w-auto"
            />
            <h5 className="text-2xl">
              NIKE, Inc. Announces Senior Leadership Changes
            </h5>
            <p className=" text-gray-500 my-3">May 24, 2023</p>
          </div>
          <div className="w-full md:w-[45%] lg:w-1/3 mr-0 lg:mr-6 mt-5 lg:mt-0">
            <Image
              src={"/assets/aboutblock2.jpg"}
              alt=""
              width={400}
              height={350}
              className="mb-5 w-full md:w-auto"
            />
            <h5 className="text-2xl">
              Nike Launches First Hydrogen-Powered Inland Container Ship
            </h5>
            <p className=" text-gray-500 my-3">May 24, 2023</p>
          </div>
          <div className="w-full md:w-[45%] lg:w-1/3 mt-5 lg:mt-0">
            <Image
              src={"/assets/aboutblock3.jpg"}
              alt=""
              width={400}
              height={350}
              className="mb-5 w-full md:w-auto"
            />
            <h5 className="text-2xl">
              Nike Partners With Strava to Fuel Digital Sport Benefits
            </h5>
            <p className=" text-gray-500 my-3">May 18, 2023</p>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Landing;
