import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
  isHomePage
}) => {
  const data = [
    { id: 1, name: "Home", url: "/home" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
  ];
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <ul className={`flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] ${isHomePage ? 'bg-black  text-white' :'bg-white  text-black'} border-t`}>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-5 px-5 border-b flex flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && categories && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {categories.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href={`/categories/${submenu}`}
                          onClick={() => {
                            setShowCatMenu(false)
                            setMobileMenu(false)
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {capitalizeFirstLetter(submenu)}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item.url} onClick={() => setMobileMenu(false)}>
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

export default MenuMobile;
