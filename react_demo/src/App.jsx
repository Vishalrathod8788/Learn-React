import { BioProvider } from "./hooks/ContextAPI";
import { Home } from "./hooks/ContextAPI/Home";

export const App = () => {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  );
};
