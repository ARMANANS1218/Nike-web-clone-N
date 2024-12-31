import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const Menu = ({ showCatMenu, setShowCatMenu, categories, isHomePage }) => {
  const data = [
    { id: 1, name: "Home", url: "/home" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
  ];
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative hover:text-custom-lime"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && categories && (
                  <ul
                    className={` absolute  ${
                      isHomePage
                        ? "bg-black text-white"
                        : " bg-white text-black"
                    } top-6 left-0 min-w-[250px] px-1  shadow-lg `}
                  >
                    {categories.map((submenu, index) => {
                      return (
                        <Link
                          key={index}
                          href={`/categories/${submenu}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className={`h-12 flex justify-between items-center px-3 ${isHomePage ? 'hover:bg-white/[0.04]' : 'hover:bg-black/[0.04]'} rounded-md`}>
                            {capitalizeFirstLetter(submenu)}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer hover:text-custom-lime">
                <Link href={item.url} className="">
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
