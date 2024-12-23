import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { ProjectStyleBlack } from "./pages/ProjectStyleBlack";

const projetoSanar = "Sanar Project";

export const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/project/sanar",
    element: <ProjectStyleBlack tituloDoProjeto={projetoSanar} />,
  },
]);
