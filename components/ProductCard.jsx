import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    product && (
      <Link
        href={`/products/${product.id}`}
        className="block h-[300px] transform overflow-hidden bg-white duration-200 cursor-pointer hover:scale-105"
      >
        <Image
          src={product.image[0]}
          alt="Product Image"
          width={500}
          height={500}
          className="w-auto mx-auto h-[70%] "
        />
        <div className="p-4 text-black/[0.9] h-[30%]">
          <h2 className="text-lg font-medium truncate">{product.name}</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">${product.price}</p>
            {product.sellCount > 1500 && product.sellCount < 3000 && (
              <>
                <p className="text-base font-medium line-through">
                  ${(product.price + (product.price * 20) / 100).toFixed(2)}
                </p>
                <p className="text-base font-medium ml-auto text-custom-lime">
                  20% off
                </p>
              </>
            )}
          </div>
        </div>
      </Link>
    )
  );
};

export default ProductCard;
