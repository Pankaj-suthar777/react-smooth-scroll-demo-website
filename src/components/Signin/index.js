import React from "react";
import {
  Container,
  ForgotText,
  Input,
  Label,
  SigninContainer,
  SigninInputWrapper,
  SigninText,
  SigninTextWrapper,
  Button,
  Logo,
} from "./SigninElement";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Logo onClick={() => navigate(-1)}>Rupee</Logo>
        <SigninContainer>
          <SigninTextWrapper>
            <SigninText>Sign in to your account</SigninText>
          </SigninTextWrapper>
          <SigninInputWrapper>
            <Label>Email</Label>
            <Input placeholder="Enter your email"></Input>

            <Label>Password</Label>
            <Input placeholder="password"></Input>
            <Button>Continue</Button>
            <ForgotText>Forgot password</ForgotText>
          </SigninInputWrapper>
        </SigninContainer>
      </Container>
    </>
  );
};

export default Signin;
