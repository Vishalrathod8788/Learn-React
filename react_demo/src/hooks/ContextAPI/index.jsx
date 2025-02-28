import { createContext } from "react";

// 1 Step: Create a context
export const BioContext = createContext();

// 2 Step: Create a Provider
export const BioProvider = () => {
    const myName = "Vishal";

    return<BioContext value={myName}></BioContext>
};