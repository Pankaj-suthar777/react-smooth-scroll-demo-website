import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./components/Pages";

function App() {
  return (
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
  );
}

export default App;
