import axios from "axios";
import react, { useEffect, useState } from "react";

type Product = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export function TryUseEffect() {
  const [product, setProduct] = useState<Product>();

  async function loadProductAsync() {
    const productResponse = await axios.get<Product>(
      "https://fakestoreapi.com/products/1"
    );
    setProduct(productResponse.data);
  }

  //useEffect should be used when connect to some infrastructure (API call, timer etc, which reach does not handle)
  useEffect(() => {
    loadProductAsync();
  }, []);

  return <>{product && <h4>{JSON.stringify(product)}</h4>}</>;
}
