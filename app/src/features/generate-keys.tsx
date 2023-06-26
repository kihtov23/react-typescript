//npm i uuid
//npm i @types/uuid
import { useState } from "react";
import { v4 } from "uuid";

export function TryGenerateKeys() {
  const namesList = ["Oleg", "Vlad", "Max"];
  return (
    <>
      {namesList.map((value, index) => {
        // generate random guid

        return <h4 key={v4()}>{value}</h4>;
      })}
    </>
  );
}

// ! random guid could lead to an issues sometimes. For example,
// sometimes input field loses focus after typing a character.
// I faced that when those inputs were generated via map from some list,I used random keys
// and updated form and list as well.
