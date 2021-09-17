import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/reset.css";
import logoLinkedin from "../assets/images/logo-linkedin.png";


export default function Header() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav">
            <img className="logo" src={logo} alt="logo" />
            <div className="nav-controller">
              <ul>
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#ferramentas">Ferramentas</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#projetos">Projetos</a>
                </li>
                <li>
                  <a href="#certificados">Certificados</a>
                </li>
                <li className="logo-linkedin">
                  <a href="https://www.linkedin.com/in/athirson-oliveira/"><img src={logoLinkedin}/></a>
                </li>
              </ul>
            </div>
            <div />
          </div>
        </div>
      </nav>
    </>
  );
}
