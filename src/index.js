import { createRoot } from "react-dom/client";
import App from "./App"; //Importando o App

const root = createRoot(document.querySelector("#root")); //puxando o id root da div no html.

root.render(<App />); //Importando o App