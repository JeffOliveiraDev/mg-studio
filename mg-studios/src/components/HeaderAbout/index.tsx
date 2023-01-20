import backgroundHeader from "../../assets/apto industrial-min.webp";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
              <a
                target={"https://www.instagram.com/mgstudiomoveis/"}
                href="https://www.instagram.com/mgstudiomoveis/"
              >
                <FaInstagram />
              </a>
              <a
                target={"http://bit.ly/michellerosa"}
                href="http://bit.ly/michellerosa"
              >
                <FaWhatsapp />
              </a>
            </div>

            <a href="#works" className="BtnContact AnchorOurWorks">
              Nossos Trabalhos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
