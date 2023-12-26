import React from "react";
import Video from "../../video/video1.mp4";
import { HeroBg, HeroContainer, VideoBg } from "./HeroSectionElement";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
    </HeroContainer>
  );
}

export default HeroSection;
