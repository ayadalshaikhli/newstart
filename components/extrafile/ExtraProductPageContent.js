import React, { useState, useContext, useEffect } from "react";
import { formatter } from "../../utils/helpers";

import { CartContext } from "../../context/shopContext";
import client, { getProduct } from "../../lib/shopify";
import ExtraProductForm from "./ExtraProductForm";
export const ExtraProductPageContent = ({ handle }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    client.product.fetchByHandle(handle).then(setProduct);
  });
  if (!product) {
    return "Loading...";
  }

  return <ExtraProductForm product={product} />;
};
