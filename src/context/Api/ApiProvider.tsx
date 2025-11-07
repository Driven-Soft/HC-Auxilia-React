import { ApiContext } from "./context";

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const apiUrl = "https://hc-auxilia-api.onrender.com/";

  // Temporariamente desativamos o PUT para evitar interação com o banco.
  // Para reativar, basta alterar `disablePut` para `false` ou removê-lo.
  const disablePut = true;

  return (
    <ApiContext.Provider value={{ apiUrl, disablePut }}>
      {children}
    </ApiContext.Provider>
  );
};
