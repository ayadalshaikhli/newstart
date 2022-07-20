import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../../utils/helpers";

export const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`}>
      <a className="group border-4 border-black rounded-3xl ">
        <div className="px-2 py-2">
          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden ">
            <div className=" relative group-hover:opacity-75 h-72 ">
              <Image
                src={originalSrc}
                alt={altText}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="border-t-2 font-bold border-black mt-5 px-5 py-2 flex justify-between">
          <div>{title}</div>
          <div>{formatter.format(price)}</div>
        </div>
        <div className="px-5 py-2 text-md text-gray-700">
          {product.node.description}
        </div>
      </a>
    </Link>
  );
};
