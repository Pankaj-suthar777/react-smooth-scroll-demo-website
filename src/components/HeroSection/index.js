import React, { useState } from "react";
import { Button } from "../ButtonElement";
import Video from "../../video/video.mp4";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElement";

function HeroSection() {
  const [hover, setHover] = useState(false);

  function onHover() {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive 250rs. in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary="true"
            dark="true"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get strated{" "}
            {hover ? <ArrowForward></ArrowForward> : <ArrowRight></ArrowRight>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
