import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const { myName, myAge, myAddress } = useContext(BioContext);
  return (
    <h1>
      Hello, Context API My Name is {myName}, I'm {myAge} years old, I'm from{" "}
      {myAddress}.
    </h1>
  );
};
