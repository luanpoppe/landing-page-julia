import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { ProjectStyleBlack } from "./pages/ProjectStyleBlack";
import { ProjectStyleWhite } from "./pages/ProjectStyleWhite";

const projectSanar = "Sanar Project";
const projectShoppingCenter = "Shopping Center Project";

export const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact isEmailSent={false} />,
  },
  {
    path: "/contact/success",
    element: <Contact isEmailSent={true} />,
  },
  {
    path: "/project/sanar",
    element: <ProjectStyleBlack tituloDoProjeto={projectSanar} />,
  },
  {
    path: "/project/shopping-center",
    element: <ProjectStyleWhite tituloDoProjeto={projectShoppingCenter} />,
  },
]);
