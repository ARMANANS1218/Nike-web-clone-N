import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdHeartEmpty } from "react-icons/io";

import PageWrapper from "@/components/layout/PageWrapper";
import ProductDetailsCarousel from "@/components/customcomponents/ProductDetailsCarousel";
import RelatedProducts from "@/components/customcomponents/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { addToCart } from "@/store/slices/cartSlice";
import { addWishList, changeIsItemAdded } from "@/store/slices/wishlistSlice";
import LoadMore from "@/components/customcomponents/LoadMore";
import ChangeColor from "@/components/ChangeColor";

const ProductDetails = ({ singleProduct, products }) => {
  const dispatch = useDispatch();
  const [carouselImage, setCarouselImage] = useState(singleProduct.image);
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const isItemAdded = useSelector((state) => state.wishList.isItemAdded);

  useEffect(() => {
    if (isItemAdded === 1) {
      toast.success("Success. Check your Wishlist", {
        icon: "❤️",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(changeIsItemAdded());
    }
  }, [isItemAdded, dispatch]);

  useEffect(() => {
    setCarouselImage(singleProduct.image);
  }, [singleProduct.image]);

  const notify = () => {
    toast.success("Success. Check your cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const changeProcut = {
    ...singleProduct,
    image: carouselImage,
  };

  return (
    <div className="w-full md:py-20">
      <PageWrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel carouselImage={carouselImage} />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-10">
              {singleProduct.name}
            </div>
            <div className="text-[18px] font-semibold mb-2">
              {singleProduct.category}
            </div>

            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                ${singleProduct.price}
              </p>
              {singleProduct.sellCount > 1500 &&
                singleProduct.sellCount < 3000 && (
                  <>
                    <p className="text-base font-medium line-through">
                      $
                      {(
                        singleProduct.price +
                        (singleProduct.price * 20) / 100
                      ).toFixed(2)}
                    </p>
                    <p className="text-base font-medium ml-auto text-custom-lime">
                      20% off
                    </p>
                  </>
                )}
            </div>
            <div className="text-md font-medium text-black/[0.5] ">
              Incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-10 ">
              {`(Also includes all application duties)`}
            </div>
            {singleProduct.colors && (
              <ChangeColor
                setCarouselImage={setCarouselImage}
                singleProduct={singleProduct}
              />
            )}
            <div className="flex justify-between">
              {" "}
              <p className="font-bold">Select size</p>
              <p>Select Guide</p>
            </div>
            <div id="sizegrid" className="grid grid-cols-3 gap-2 my-4">
              {singleProduct.size.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : " cursor-not-allowed bg-black/[0.1]"
                    } ${
                      selectedSize === item.s
                        ? "border-black bg-custom-lime text-white"
                        : ""
                    }`}
                    onClick={() => {
                      item.enabled ? setSelectedSize(item.s) : null;
                      setShowError(false);
                    }}
                  >
                    {item.s}
                  </div>
                );
              })}
            </div>
            {showError && (
              <div className="text-red-600 my-2">
                Size selection is required
              </div>
            )}
            <div className="mb-10">
              <div>
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                  onClick={() => {
                    if (!selectedSize) {
                      setShowError(true);
                      document.getElementById("sizegrid").scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      });
                    } else {
                      singleProduct.colors
                        ? dispatch(
                            addToCart({
                              ...changeProcut,
                              id: Date.now(),
                              isOtherColor: true,
                              selectedSize: selectedSize,
                            })
                          )
                        : dispatch(
                            addToCart({
                              ...singleProduct,
                              selectedSize: selectedSize,
                            })
                          );
                      notify();
                    }
                  }}
                >
                  Add TO Cart
                </button>
              </div>
              <div>
                <button
                  className="w-full py-4 rounded-full border border-black  text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center gap-2"
                  onClick={() => {
                    singleProduct.colors
                      ? dispatch(
                          addWishList({
                            ...changeProcut,
                            id: Date.now(),
                            isOtherColor: true,
                            colorType: carouselImage[0],
                          })
                        )
                      : dispatch(addWishList(singleProduct));
                  }}
                >
                  Wishlist
                  <IoMdHeartEmpty size={20} />
                </button>
              </div>
              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  <LoadMore text={singleProduct.description} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts products={products} />
        <ToastContainer />
      </PageWrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  try {
    const products = await fetchDataFromApi("/products");
    const paths = products.map((product) => ({
      params: {
        productId: product.id.toString(),
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error getting static paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(context) {
  try {
    const { params } = context;
    const { productId } = params;
    const response = await fetchDataFromApi(`/products/${productId}`);
    const products = await fetchDataFromApi("/products");
    return {
      props: { singleProduct: response, products },
    };
  } catch (error) {
    console.error("Error while getting static properties:", error);
    return {
      props: { singleProduct: null, products: [] },
    };
  }
}
