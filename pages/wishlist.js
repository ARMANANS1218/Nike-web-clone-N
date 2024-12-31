import PageWrapper from "@/components/layout/PageWrapper";
import ProductCard from "@/components/ProductCard";
import { addToCart } from "@/store/slices/cartSlice";
import { deleteFromWishList } from "@/store/slices/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Wishlist = () => {
  const dispatch = useDispatch();

  const { wishListItems } = useSelector((state) => state.wishList);

  return (
    <div className="md:py-20 w-full">
      <PageWrapper>
        <>
          {wishListItems.length > 0 && (
            <>
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-center">
                Wish LIst
              </div>
              <div className="flex flex-wrap py-5 justify-center">
                {wishListItems.map((wish, index) => {
                  return (
                    <div key={wish.id} className="w-[30%] m-3 shadow p-2">
                      <div className="flex justify-end">
                        <button
                          className="py-2 px-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 my-2 hover:opacity-75 "
                          onClick={() => dispatch(deleteFromWishList(wish))}
                        >
                          &#10005;
                        </button>
                      </div>
                      <ProductCard product={wish} />;
                      <div className="flex justify-end">
                        <button
                          className="py-2 px-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 my-2 hover:opacity-75 "
                          onClick={() => dispatch(addToCart(wish))}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {wishListItems.length < 1 && (
            <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
              <Image
                src="/assets/empty.jpg"
                alt="empty"
                width={300}
                height={300}
                className="w-[300px] md:w-[400px]"
              />
              <span className="text-xl font-bold">Your wishlist is empty</span>
              <span className="text-center mt-4">
                Looks like you have not added anything in your wishlist.
                <br />
                Go ahead and explore top categories.
              </span>
              <Link
                href="/"
                className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </>
      </PageWrapper>
    </div>
  );
};

export default Wishlist;
