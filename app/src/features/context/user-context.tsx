import { createContext, useContext } from "react";
import { Gender } from "./gender-selector";

export type IUserContext = {
  setGender: (gender: Gender) => void;
};

export const UserContext = createContext<IUserContext>({
  setGender: (gender: Gender) => {},
});

export const useUserContext = () => useContext(UserContext);
