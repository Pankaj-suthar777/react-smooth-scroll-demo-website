import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
    </BrowserRouter>
  );
}

export default App;
