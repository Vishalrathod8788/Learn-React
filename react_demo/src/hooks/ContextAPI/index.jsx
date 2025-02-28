import { createContext } from "react";

// 1 Step: Create a context
export const BioContext = createContext();

// 2 Step: Create a Provider
export const BioProvider = ({ children }) => {
  const myName = "Vishal";
  const myAge = 21;
  const myAddress = "Jamnagar";

  return (
    <BioContext.Provider value={{ myName, myAge, myAddress }}>
      {children}
    </BioContext.Provider>
  );
};
