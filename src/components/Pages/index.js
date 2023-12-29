import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../NavBar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../InfoSection/Data";
import Services from "../Services";
import Footer from "../Footer";

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
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <Services></Services>
      <InfoSection {...homeObjThree}></InfoSection>
      <Footer></Footer>
    </>
  );
};

export default Home;
