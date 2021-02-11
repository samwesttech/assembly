import React from "react";
import { FooterStyled, FooterImageStyled } from "../styles";
import Logo from "../Assets/Logo.png";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterImageStyled src={Logo} />
      <div className="icons">
        <a className="fa fa-phone"></a>
        <a className="fa fa-envelope"></a>
        <a className="fa fa-facebook"></a>
        <a className="fa fa-instagram"></a>
      </div>
      <div className="policy">
        <h3>COOKIES</h3>
        <h3>PRIVACY POLICY</h3>
      </div>
      <p>Copyright © The Assembly 2021</p>
    </FooterStyled>
  );
};

export default Footer;
