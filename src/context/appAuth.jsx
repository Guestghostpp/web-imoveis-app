import { useContext } from "react";
import { AppContext } from "./AppContext";

export const appAuth = () => {
  const context = useContext(AppContext);
  return context;
};
