import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
    </BrowserRouter>
  );
}

export default App;
