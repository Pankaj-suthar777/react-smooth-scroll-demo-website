import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  white-space: nowrap;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  background: ${({ primary }) => (primary ? "#01BF71" : "#01060")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  margin-top: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
