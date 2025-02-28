import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const { myName, myAge, myAddress, myHobbies, myEducation } =
    useContext(BioContext);
  return (
    <>
      <h2>My Introduction</h2>
      <p>
        Hello, My Name is {myName}, I'm {myAge} years old.
      </p>
      <p>I live in {myAddress}</p>
      <p>My Hobbies are {myHobbies.join(", ")}</p>
      <p>
        My Education is {myEducation.degree} in {myEducation.branch} since{" "}
        {myEducation.year}
      </p>
    </>
  );
};
