import { AiOutlineHome } from "react-icons/ai";
import { FaWhatsapp, FaPencilRuler } from "react-icons/fa";

export const HowWeWork = () => {
  return (
    <section className="BoxProcedures">
      <div className="HowWeWork">
        <h4>COMO TRABALHAMOS</h4>
        <h2> NOSSO PROCEDIMENTO DE TRABALHO</h2>
      </div>
      <ul className="CardsHowWeWork">
        <li className="CardWork">
          <FaWhatsapp />
          <h3>ENTRANDO EM CONTATO</h3>
          <p>Conversamos a respeito do projeto</p>
        </li>
        <li className="CardWork">
          <FaPencilRuler />
          <h3>CRIAMOS O DESIGN PROTÓTIPO</h3>
          <p>Conversamos a respeito do projeto</p>
        </li>
        <li className="CardWork">
          <AiOutlineHome />
          <h3>TRABALHO FINAL</h3>
          <p id="works">Conversamos a respeito do projeto</p>
        </li>
      </ul>
    </section>
  );
};
