import axios from "axios";
import react, { useState } from "react";
import { Product } from "./product-model";

export function TryApiCall() {
  const [product, setProduct] = useState<Product>();
  async function LoadProduct() {
    const productResult = await axios.get<Product>(
      "https://fakestoreapi.com/products/1"
    );
    setProduct(productResult.data);
  }
  return (
    <>
      
      <button onClick={() => LoadProduct()}>Load Product</button>
      {product && <h2>{JSON.stringify(product)}</h2>}
    </>
  );
}
