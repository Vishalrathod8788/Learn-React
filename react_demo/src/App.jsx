import { BioProvider } from "./hooks/ContextAPI";

export const App = () => {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  );
};
