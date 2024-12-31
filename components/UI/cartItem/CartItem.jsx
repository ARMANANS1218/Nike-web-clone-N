import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: product.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shirik-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={product.image[0]}
          alt="image cart"
          width={120}
          height={120}
        />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {product.name}
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2 text-right">
            $ {product.price}
            <div className="text-right">
              {product.quanity}x : ${product.totalPrice}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {product.size.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.s}
                      disabled={!item.enabled ? true : false}
                      selected={product.selectedSize === item.s}
                    >
                      {item.s}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option
                      value={q}
                      key={i + 1}
                      selected={product.quanity === q}
                    >
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: product.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
