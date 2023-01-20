import ap37 from "../../assets/apto industrial-37-min.webp";
import { FaAngleRight } from "react-icons/fa";

export const BoxCardsHeader = () => {
  return (
    <section className="BoxCards">
      <div className="CardLeft">
        <div className="InsideCard">
          <h3>CONSULTORIA EM HOME DESIGN</h3>
          <p>
            Nosso principal foco é o seu BEM-ESTAR! Queremos transformar a sua
            casa no lar que você sempre sonhou, de acordo com as suas
            necessidades e desejos!
          </p>

          <a
            target={"https://www.instagram.com/mgstudiomoveis/reels/"}
            href="https://www.instagram.com/mgstudiomoveis/reels/"
          >
            Confira <FaAngleRight />
          </a>
        </div>
      </div>
      <div className="CardMiddle">
        <img src={ap37} alt="" />

        <div className="CardMiddleTitleArrow">
          <a
            target={"https://www.instagram.com/mgstudiomoveis/"}
            href="https://www.instagram.com/mgstudiomoveis/"
          >
            Home Design
          </a>
          <FaAngleRight />
        </div>
      </div>
      <div className="CardRight">
        <div className="InsideCard">
          <h3>MÓVEIS SOB MEDIDA NA SUA CASA?</h3>
          <p>
            Eu tenho certeza que você sabe todos os detalhes da sua casa dos
            sonhos, não é mesmo? Nosso grande compromisso com você é
            materializar esse sonho!
          </p>
          <a
            target={"http://bit.ly/michellerosa"}
            href="http://bit.ly/michellerosa"
          >
            Fale com um ESPECIALISTA! <FaAngleRight />
          </a>
        </div>
      </div>
    </section>
  );
};
