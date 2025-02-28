import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Vishal";
  const myAge = 20;
  const myAddress = "Jamnagar, Gujarat";
  const myHobbies = ["Coding", "Reading", "Travelling"];
  const myEducation = {
    degree: "BCA",
    branch: "Computer Science",
    year: 2024,
  };
  return (
    <BioContext.Provider
      value={{ myName, myAge, myAddress, myHobbies, myEducation }}
    >
      {children}
    </BioContext.Provider>
  );
};
