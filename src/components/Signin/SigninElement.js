import styled from "styled-components";

export const SigninContainer = styled.div`
  width: 70%;
  max-width: 600px;
  background-color: black;
  height: 70%;
  border-radius: 5px;

  @media screen and (max-width: 650px) {
    height: 500px;
    width: 90%;
  }
`;

export const Container = styled.div`
  background-color: #65b741;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SigninTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const SigninText = styled.p`
  text-align: center;
  padding-top: 65px;
  color: white;
  font-size: 22px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

export const SigninInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 16px;
  color: white;
  margin-top: 30px;
  align-self: flex-start;
  margin-left: 10%;
  margin-bottom: 5px;

  @media screen and (max-width: 650px) {
    font-size: 11px;
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  outline: none;
  padding: 0 5px;
  border-radius: 5px;

  @media screen and (max-width: 650px) {
    height: 35px;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 45px;
  background-color: #c1f2b0;
  color: black;
  border-radius: 10px;
  margin-top: 50px;

  @media screen and (max-width: 650px) {
    height: 40px;
  }
`;

export const ForgotText = styled.p`
  font-size: 12px;
  margin-top: 18px;
  color: white;
`;

export const Logo = styled.h2`
  position: absolute;
  top: 20px;
  left: 20px;
  color: black;
  cursor: pointer;
`;
