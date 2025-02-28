import { BioProvider } from ".";

export const Home = () => {
  return (
    <BioProvider data={myName}>
      <h1>Home Component</h1>
      <p>My Name is {myName}</p>
    </BioProvider>
  );
};
