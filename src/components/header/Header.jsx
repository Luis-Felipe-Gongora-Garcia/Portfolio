import React from "react";
import CVC from "./CVC";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
import ME from "../../assets/me.png";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou o</h5>
        <h1>Luis Felipe</h1>
        <h5 className="text-light">Desenvolvedor Full Stack</h5>
        <CVC />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
}
