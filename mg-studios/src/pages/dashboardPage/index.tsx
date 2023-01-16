import React from "react";
import { StyledDashboard } from "./style";
import backgroundHeader from "../../assets/apto industrial.jpg";
import logo from "../../assets/logo.png";
import ap37 from "../../assets/apto industrial-37.jpg";

import { FaAngleRight } from "react-icons/fa";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <header>
        <section className="BoxHeader">
          <div className="TitleHeader">
            {/* <h1>
              MG <span>S</span>tudio
            </h1> */}

            <img src={logo} alt="" />
          </div>
          <div className="BoxBtns">
            <button>HOME</button>
            <button>SOBRE</button>
            <button>SERVIÇOS</button>
            <button className="BtnContact">CONTATO</button>
          </div>
        </section>
      </header>
      <div className="HeaderAbout">
        <img className="BackgroundHeader" src={backgroundHeader} alt="" />
        {/* <div className="BackgroundLeft"></div> */}
        <div className="BoxInsideAboutHeader">
          <div className="BoxLeftAbout">
            <div className="BoxLeftBackGround">
              <h3>
                BEM VINDO AO MG <span>S</span>TUDIO
              </h3>
              <h2>TRASFORME SEU LAR</h2>
              <h4>EM UM AMBIENTE </h4>
              <h2>PRÁTICO BONITO E REQUINTADO</h2>
              <p>
                Projetamos e fabricamos móveis de alta qualidade, que atendem a
                sua real necessidade, aliando a alta funcionalidade ao design
                moderno.
              </p>
              <a href="" className="BtnContact">
                Nossos Trabalhos
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="BoxCards">
        <div className="CardLeft"></div>
        <div className="CardMiddle">
          <img src={ap37} alt="" />

          <h4>
            Consulta em Home Design <FaAngleRight />
          </h4>
        </div>
        <div className="CardRight"></div>
      </section>
    </StyledDashboard>
  );
};
