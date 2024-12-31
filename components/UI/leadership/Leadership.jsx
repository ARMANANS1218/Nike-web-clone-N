import Image from "next/image";
import React from "react";

const Leadership = () => {
  const leadershipData = [
    {
      id: 1,
      name: "Philip H. Knight",
      role: "Chairman Emeritus",
      img: "/assets/leadership/1.jpg",
    },
    {
      id: 2,
      name: "Mark Parker",
      role: " Executive Chairman",
      img: "/assets/leadership/2.jpg",
    },
    {
      id: 3,
      name: "John Donahoe",
      role: "President & CEO",
      img: "/assets/leadership/3.jpg",
    },

    {
      id: 4,
      name: "Andy Campion",
      role: " Chief Operating Officer",
      img: "/assets/leadership/4.jpg",
    },

    {
      id: 5,
      name: "Thomas Clarke",
      role: "President, Innovation",
      img: "/assets/leadership/5.jpg",
    },
    {
      id: 6,
      name: "Matthew Friend",
      role: "EVP & Chief Financial Officer",
      img: "/assets/leadership/6.jpg",
    },

    {
      id: 7,
      name: "Monique Matheson",
      role: "  EVP, Chief Human Resources Officer",
      img: "/assets/leadership/7.jpg",
    },
    {
      id: 8,
      name: "Ann Miller",
      role: " EVP, Chief Legal Officer",
      img: "/assets/leadership/8.jpg",
    },
    {
      id: 9,
      name: "Heidi O’Neill",
      role: " President, Consumer and Marketplace",
      img: "/assets/leadership/9.jpg",
    },
    {
      id: 10,
      name: "Nigel Powell",
      role: "EVP, Chief Communications Officer",
      img: "/assets/leadership/10.jpg",
    },

    {
      id: 11,
      name: "John Slusher",
      role: "EVP, Global Sports Marketing",
      img: "/assets/leadership/11.jpg",
    },
    {
      id: 12,
      name: "Michael Spillane",
      role: "President, Consumer Creation",
      img: "/assets/leadership/12.jpg",
    },
    {
      id: 13,
      name: "G. Scott Uzzell",
      role: "President & CEO, Converse, Inc.",
      img: "/assets/leadership/13.jpg",
    },
    {
      id: 14,
      name: "Dirk-Jan “DJ” Van-Hameren",
      role: "EVP, Chief Marketing Officer",
      img: "/assets/leadership/14.jpg",
    },
    {
      id: 15,
      name: "Craig Williams",
      role: " President, Jordan Brand",
      img: "/assets/leadership/15.jpg",
    },
  ];
  return (
    
    <div>
      <h5 className="mt-20 mb-5 text-3xl font-semibold">Leadership</h5>
      <div className="flex  flex-wrap justify-center ">
        {leadershipData.map((person) => {
          return (
            <div
              key={person.id}
              className="w-full mob:w-[45%] md:w-[30%] lg:w-[23%] my-1 mob:mr-2 sm:mr-5"
            >
              <Image
                src={person.img}
                alt="leadership image"
                width={300}
                height={160}
                className="mx-auto  mob:w-[200px] sm:w-full  sm:mx-0"
              />
              <h6 className="text-center sm:text-left text-xl my-2 font-[700]">
                {person.name}
              </h6>
              <p className="text-center sm:text-left text-sm">{person.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leadership;
