import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../NavBar";
import HeroSection from "../HeroSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>
      <HeroSection></HeroSection>
    </>
  );
};

export default Home;
