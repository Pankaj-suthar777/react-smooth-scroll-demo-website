import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Pages";
import SigninPage from "./components/Pages/signin.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SigninPage></SigninPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
