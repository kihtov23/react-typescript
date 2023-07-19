import { useState } from "react";
import { Gender, GenderSelector } from "./gender-selector";
import { UserContext } from "./user-context";

export function ParentUserComponent() {
  const [gender, setGender] = useState<Gender>("NotSpecified");
  const updateGender = (gender: Gender) => setGender(gender);
  return (
    <>
      <UserContext.Provider value={{ setGender: updateGender }}>
        <h3>
          This is a parent component to illustrate how to update state in the
          parent component from child component
        </h3>
        <p>My gender is: {gender} </p>
        <GenderSelector></GenderSelector>
      </UserContext.Provider>
    </>
  );
}
