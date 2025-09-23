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
import Manuais from "./routes/Manuais/Manuais.tsx";
import ComCadastro from "./routes/Manuais/ComCadastro.tsx";
import SemCadastro from "./routes/Manuais/SemCadastro.tsx";
import ManualTeleconsulta from "./routes/Manuais/ManualTeleconsulta.tsx";
import Notificacoes from "./routes/Contato/Notificacoes.tsx";

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
      { path: "integrante/:rm", element: <IntegranteDetalhe /> },
      { path: "manuais", element: <Manuais />},
      { path: "manuais/comcadastro", element: <ComCadastro /> },
      { path: "manuais/semcadastro", element: <SemCadastro /> },
      { path: "manuais/teleconsulta", element: <ManualTeleconsulta /> },
      { path: "contato/notificacoes", element: <Notificacoes />}
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
