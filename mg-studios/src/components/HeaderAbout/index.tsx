import React from "react";
import backgroundHeader from "../../assets/apto industrial-min.jpg";
import { FaAngleRight, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const InsideHeader = () => {
  return (
    <div className="HeaderAbout">
      <img className="BackgroundHeader" src={backgroundHeader} alt="" />

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
            <div className="ContactIcons">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
            </div>

            <a href="" className="BtnContact AnchorOurWorks">
              Nossos Trabalhos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
