import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElement";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { animateScroll } from "react-scroll";

function scrollToTop() {
  animateScroll.scrollToTop();
}

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">Submit Video</FooterLink>
              <FooterLink to="/signin">Ambassadors</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={scrollToTop}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/">
                <FaFacebook></FaFacebook>
              </SocialIconLink>
              <SocialIconLink href="/">
                <FaInstagram></FaInstagram>
              </SocialIconLink>
              <SocialIconLink href="/">
                <FaYoutube></FaYoutube>
              </SocialIconLink>
              <SocialIconLink href="/">
                <FaTwitter></FaTwitter>
              </SocialIconLink>
              <SocialIconLink href="/">
                <FaLinkedin></FaLinkedin>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
