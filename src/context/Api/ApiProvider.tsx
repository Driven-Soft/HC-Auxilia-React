import { ApiContext } from "./context";

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const apiUrl = "http://localhost:8080";

  return (
    <ApiContext.Provider value={{ apiUrl }}>{children}</ApiContext.Provider>
  );
};
