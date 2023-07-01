import axios from "axios";
import react, { useEffect, useMemo, useState } from "react";

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

function regularComputation() {
  console.log("TryUseMemo. We are inside regular computation function");
  return "computation result";
}

export function TryUseMemo() {
  console.log("TryUseMemo. Component was reloaded");

  async function loadProductAsync() {
    const productResponse = await axios.get<Product>(
      "https://fakestoreapi.com/products/1"
    );
    console.log("Try use memo. API was called");
    return productResponse.data;
  }

  // ! we cannot make api call inside useMemo,
  // because that is asynchronous execution which is not possible in useMemo
  //   const response = useMemo(() => {
  //     return loadProductAsync();
  //   }, []);

  const useMemoComputationResult = useMemo(() => {
    console.log("TryUseMemo. We are inside computation in useMemo");
    return "useMemo computation result";
  }, []);

  const copmutationResult = regularComputation();

  const [countClicked, setCountClicked] = useState<number>(0);

  return (
    <>
      <h4>Cached Computation result via useMemo: {useMemoComputationResult}</h4>
      <h4>Reqular Computation result: {copmutationResult}</h4>
      <button onClick={() => setCountClicked(countClicked + 1)}>
        Click me to change state and trigger component reloading. Count:{" "}
        {countClicked}
      </button>
    </>
  );
}
