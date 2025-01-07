import "./App.css";
import "./utils/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { rotas } from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={rotas} />;
}

export default App;
