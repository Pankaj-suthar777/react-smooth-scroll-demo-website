import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../NavBar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";

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
      <InfoSection></InfoSection>
    </>
  );
};

export default Home;
