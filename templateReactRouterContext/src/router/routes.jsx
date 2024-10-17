import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Dragons from "../pages/Dragons";
import Numeros712 from "../pages/Numeros712";
import Numeros713 from "../pages/Exercicio713";


const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/dragons", element: <Dragons/>},
    {path: "/numeros712", element: <Numeros712/>},
    {path: "/numeros713", element: <Numeros713/>},

])

export default router;
