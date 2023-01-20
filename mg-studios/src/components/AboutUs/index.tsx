import { AiFillCheckCircle } from "react-icons/ai";
import img18 from "../../assets/apto industrial-18-min.webp";

export const AboutUs = () => {
  return (
    <div className="BoxAboutUs">
      <div className="BoxImgAboutUs">
        <img src={img18} alt="" />
      </div>
      <div id="about" className="BoxTextAboutUs">
        <h4>QUEM SOMOS</h4>
        <h2>NÓS SOMOS O TIME PERFEITO PARA SUA CASA</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          alias aspernatur repellendus nihil optio blanditiis, deleniti
          consequuntur quisquam unde excepturi vero eius sint voluptas saepe
          impedit velit? Earum, possimus veritatis.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          velit quod saepe excepturi consectetur voluptatibus pariatur,
          doloribus est dicta architecto aliquid dolore at hic! Repudiandae iste
          laborum voluptatem suscipit est.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          velit quod saepe excepturi consectetur voluptatibus pariatur,
          doloribus est dicta architecto aliquid dolore at hic! Repudiandae iste
          laborum voluptatem suscipit est.
        </p>

        <div className="CheckList">
          <div className="ChecklistLeft">
            <h4>
              <AiFillCheckCircle />
              esquerda
            </h4>
            <h4>
              <AiFillCheckCircle />
              esquerda
            </h4>
            <h4>
              <AiFillCheckCircle />
              esquerda
            </h4>
          </div>
          <div className="ChecklistRight">
            <h4>
              <AiFillCheckCircle />
              direita
            </h4>
            <h4>
              <AiFillCheckCircle />
              direita
            </h4>
            <h4>
              <AiFillCheckCircle />
              direita
            </h4>
          </div>
        </div>
        <div className="BoxExperienceClients">
          <div className="Experience">
            <h2>15A</h2>
            EXPERIÊNCIA
          </div>
          <div className="Projects">
            <h2>125+</h2>
            PROJETOS
          </div>
          <div className="Clients">
            <h2>500+</h2>
            CLIENTES
          </div>
        </div>
      </div>
    </div>
  );
};
