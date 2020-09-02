import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.header`
  position: relative;
  height: 120px;
  background-color: #000;
`;

const Logo = styled.div`
  position: absolute;
  top: 24px;
  left: 30px;
  height: 60px;

  @media all and (max-width: 620px) {
    display: none;
  }
`;

const ResourceLinks = styled.div`
  font-family: gotham ssm a, gotham ssm b, sans-serif;
  font-weight: 300;
  position: absolute;
  top: 24px;
  right: 40px;
  letter-spacing: 1px;

  @media all and (max-width: 820px) {
    padding: 15px 60px;
    font-size: 12px;
  }

  @media all and (max-width: 620px) {
    padding: 15px 20px;
    margin: 0px 20px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 30px;
  border-radius: 2px;
  color: #fff;
  background: #00bcd4;
  border: 0px;
  text-align: center;

  @media all and (max-width: 820px) {
    padding: 10px 5px;
    font-size: 10px;
  }
  /* @media all and (max-width: 620px) {
    display: none;
  } */
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  margin-left: 50px;
  cursor: pointer;

  @media all and (max-width: 620px) {
    margin-left: 20px;
  }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Logo>
        <img
          width="60px"
          src="https://image.flaticon.com/icons/svg/888/888896.svg"
          alt="logo.png"
        />
      </Logo>
      <ResourceLinks>
        <Button> TRY NOW </Button>
        <A href="https://www.masaischool.com/hire-masai-grads"> About us </A>
        <A href="https://www.masaischool.com/faq"> FAQ </A>
        <A> Login </A>
      </ResourceLinks>
    </NavBarWrapper>
  );
}

export default NavBar;
