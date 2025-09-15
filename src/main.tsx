import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home/Home.tsx";
import Contato from "./routes/Contato/Contato.tsx";
import Faq from "./routes/Faq/Faq.tsx";
import Cuidador from "./routes/Cuidador/Cuidador.tsx";
import Feedback from "./routes/Feedback/Feedback.tsx";
import Integrantes from "./routes/Integrantes/Integrantes.tsx";

import Root from "./routes/Root/root.tsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";
import Sobre from "./routes/Sobre/Sobre.tsx";
import IntegranteDetalhe from "./routes/IntegranteDetalhe/IntegranteDetalhe.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "contato", element: <Contato /> },
      { path: "cuidador", element: <Cuidador /> },
      { path: "faq", element: <Faq /> },
      { path: "feedback", element: <Feedback /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "sobre", element: <Sobre />},
      { path: "integrante/:rm", element: <IntegranteDetalhe /> }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
