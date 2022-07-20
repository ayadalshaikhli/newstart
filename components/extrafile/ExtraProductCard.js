import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../../utils/helpers";

import { getAllProducts, getProduct } from "../../lib/shopify";
import { ExtraProductPageContent } from "./ExtraProductPageContent";
export default function ExtraProductCard({ product, prohand }) {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <div className="relative">
          <a
            onClick={() => {
              setShow(false);
            }}
          >
            <div
              style={{
                zIndex: "10",
                position: "fixed",
                top: "20%",
                left: "79%",

                transform: "translate(-50%, -50%)",
              }}
              className="bg-red-100 w-5 h-5  text-center align-middle justify-center"
            >
              X
            </div>
          </a>

          <ExtraProductPageContent handle={handle} />
        </div>
      )}
      <a
        className=" "
        onClick={() => {
          setShow(!show);
        }}
      >
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
      </a>
    </>
  );
}
