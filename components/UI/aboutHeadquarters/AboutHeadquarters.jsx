import Image from "next/image";
import React, { useState } from "react";
import { BsInfo } from "react-icons/bs";

const AboutHeadquarters = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headquarers = [
    {
      id: 1,
      title: "NIKE, Inc. World Headquarters",
      image: "/assets/headquarters/1.jpg",
      address: {
        street: "One Bowerman Drive",
        zip: "Beaverton, OR 97005",
        country: "United States",
        phone: "+1 503 671 6453",
      },
      description:
        "Nike’s World Headquarters in Beaverton, Oregon opened in 1990, spans 400 acres and has more than 75 buildings, many named after the company’s marquee sponsored athletes, past and present. The campus hosts more than 11,000 employees who have access to cafés, state-of-the-art fitness centers, sport fields, sport courts and track, running and bike paths. During the decades, Nike WHQ has expanded to include new buildings, such as the LeBron James Innovation Center and Serena Williams Building.",
    },
    {
      id: 2,
      title: "NIKE, Inc. European Headquarters",
      image: "/assets/headquarters/2.jpg",
      address: {
        street: "Colosseum 1",
        zip: "1213 NL Hilversum",
        country: "The Netherlands",
        phone: "+31 35 6266453",
      },
      description:
        "Established in 1999, Nike’s European Headquarters in Hilversum, The Netherlands sits on the former grounds of the 1928 Amsterdam Olympic Equestrian Games. The campus of 10 sustainability-designed buildings is home to more than 2,000 employees from more than 70 countries. Employees have access to training centers, running tracks, cycling paths, a pond-slash-ice rink, adaptable workspaces, eateries, an employee store and more. The campus is a virtually PVC-free environment and has a public lawn with one of the largest rainwater collection systems in Europe.",
    },
    {
      id: 3,
      title: "NIKE, Inc. Greater China Headquarters",
      image: "/assets/headquarters/3.jpg",
      address: {
        street: "No. 99, Jiangwancheng Road",
        zip: "Yangpu District",
        country: "Shanghai 200438",
        phone: "+86 21 52882828",
      },
      description:
        "Opened in 2013, Nike’s Greater China HQ in Shanghai’s Yangpu District spans 55,000 square meters and is accessible to employees via 11 free shuttle bus lines. It features a football pitch, an indoor basketball court, fitness classes, cafés, an employee store and more. The campus is growing rapidly, both in size and in its diverse, international employee base.",
    },
    {
      id: 4,
      title: "Converse World Headquarters",
      image: "/assets/headquarters/4.jpg",
      address: {
        street: "160 North Washington Street,",
        zip: "Boston, Massachusetts",
        country: "United States",
        phone: "+1 432 1234 5678",
      },
      description:
        "Converse World Headquarters opened its doors in 2015 on the Lovejoy Wharf in downtown Boston. Located in Massachusetts’ North Station neighborhood, the HQ sits in the middle of Freedom Trail, which connects 16 historic sites throughout the city. The 11-story, 230,000-square-foot building overlooks the Charles River.",
    },
  ];
  return (
    <div>
      <h5 className="mt-20 mb-5 text-3xl font-semibold">Headquarters</h5>
      <div className="flex flex-wrap justify-center">
        {headquarers.map((building) => {
          return (
            <div key={building.id} className="w-full sm:w-1/2 px-3 my-5">
              <div className="relative overflow-hidden">
                <Image
                  src={building.image}
                  alt="building"
                  width={560}
                  height={700}
                  className="w-full"
                />
                <div
                  className="absolute right-4 bottom-4 z-30 bg-white text-black p-1 text-[30px] rounded-full hover:opacity-70 transition-all duration-300 cursor-pointer active:scale-125"
                  onClick={() => {
                    if (building.id === index) {
                      setIsVisible(false);
                      setTimeout(() => {
                        setIndex(0);
                      }, 300);
                    } else {
                      setIndex(building.id);
                      setIsVisible(true);
                    }
                  }}
                >
                  <BsInfo />
                </div>
                {building.id === index && (
                  <div
                    className={`w-full absolute bottom-0 text-white bg-black/[0.6] py-3 px-2 mob:px-5 transition-transform    ${
                      isVisible ? "animate-slide-in" : "animate-slide-out"
                    } `}
                  >
                    <p className="max-w-[280px] max-h-screen mob:max-w-[350px] md:max-w-[450px] h-full text-xs sm:text-sm ">
                      {building.description}
                    </p>
                  </div>
                )}
              </div>

              <h2 className="text-xl mob:text-2xl sm:text-3xl md:text-4xl font-bold my-1 mob:my-2 md:my-5">
                {building.title}
              </h2>
              <ul>
                <li className="text-gray-500">{building.address.street}</li>
                <li className="text-gray-500">{building.address.zip}</li>
                <li className="text-gray-500">{building.address.country}</li>
                <li className="text-gray-500">{building.address.phone}</li>
              </ul>
            </div>
          );
        })}
      </div>
    
    </div>
  );
};

export default AboutHeadquarters;
