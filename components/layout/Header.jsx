import { useState, useEffect } from "react";
import PageWrapper from "./PageWrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "../UI/menu/desktop/Menu";
import MenuMobile from "../UI/menu/mobile/MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const Header = ({ isHomePage }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishListItems } = useSelector((state) => state.wishList);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };
  const getCategories = async () => {
    const categories = await fetchDataFromApi("/categories");
    setCategories(categories);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] ${
        isHomePage ? "bg-black text-white" : "bg-white"
      } flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <PageWrapper className="h-[60px] flex items-center justify-between ">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={60}
            height={40}
            className={`${isHomePage ? 'invert' : ''}`}
          />
        </Link>

        <div className="flex">
          <Menu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            categories={categories}
            isHomePage={isHomePage}
          />
          {mobileMenu && (
            <MenuMobile
              categories={categories}
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
              setMobileMenu={setMobileMenu}
              isHomePage={isHomePage}
            />
          )}
          <div className="flex items-center gap-2  md:ml-10">
            <Link href="/wishlist">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <IoMdHeartEmpty className="text-[19px] md:text-[24px] " />
                {wishListItems.length > 0 && (
                  <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-custom-lime absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                    {wishListItems.length}
                  </div>
                )}
              </div>
            </Link>

            <Link href="/cart">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <BsCart className="text-[15px] md:text-[20px] " />
                {cartItems.length > 0 && (
                  <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-custom-lime absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>

            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative md:hidden">
              {mobileMenu ? (
                <VscChromeClose
                  className="text-[16px]"
                  onClick={() => setMobileMenu(false)}
                />
              ) : (
                <BiMenuAltRight
                  className="text-[20px]"
                  onClick={() => setMobileMenu(true)}
                />
              )}
            </div>
          </div>
        </div>
      </PageWrapper>
    </header>
  );
};

export default Header;
