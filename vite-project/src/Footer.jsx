// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: #fff;
  padding: 40px 50px;
  margin-top: 50px;
  height: 150px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
  }
`;

const CopyrightText = styled.div`
  font-size: 14px;
`;

const AboutUs = styled.div`
  font-size: 14px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>&copy; 2024 My Portfolio</CopyrightText>
      <AboutUs>
        <p><strong>About Us</strong></p>
        <p>We create amazing web experiences for our users.</p>
        <ion-icon name="logo-linkedin" style={{"font-size":"30px","justify-content":"space-evenly","margin-left":"1rem"}}></ion-icon>
        <ion-icon name="logo-instagram"style={{"font-size":"30px","justify-content":"space-evenly","margin-left":"1rem"}}></ion-icon>
        <ion-icon name="logo-facebook" style={{"font-size":"30px","justify-content":"space-evenly","margin-left":"1rem"}}></ion-icon>
        <ion-icon name="logo-twitter"  style={{"font-size":"30px","justify-content":"space-evenly","margin-left":"1rem"}}></ion-icon>
      </AboutUs>
    </FooterContainer>
  );
};

export default Footer;
