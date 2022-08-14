import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";

export default function About() {
  return (
    <section id="about">
      <h5>Um pouco</h5>
      <h2>Sobre mim!</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
            dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
            dolor sit amet consectetur.
          </p>
          <a href="#contact" className="btn btn-primary">
            Entrar em contato!
          </a>
        </div>
      </div>
    </section>
  );
}
