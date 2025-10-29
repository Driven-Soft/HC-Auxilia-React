import { ApiContext } from "./context";

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const apiUrl = "https://hc-auxilia-api.onrender.com/";

  return (
    <ApiContext.Provider value={{ apiUrl }}>{children}</ApiContext.Provider>
  );
};
