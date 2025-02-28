import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const myName = useContext(BioContext);
  return <h1>Hello, {myName} </h1>;
};
