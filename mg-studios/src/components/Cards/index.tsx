import ap37 from "../../assets/apto industrial-37-min.jpg";
import { FaAngleRight } from "react-icons/fa";

export const BoxCardsHeader = () => {
  return (
    <section className="BoxCards">
      <div className="CardLeft">
        <div className="InsideCard">
          <h3>CONSULTORIA EM HOME DESIGN</h3>
          <p>fazemos consultoriasa dsafsdfasdfas fasdfadsfds dasdas gasds</p>
          <a href="">
            Leia mais <FaAngleRight />
          </a>
        </div>
      </div>
      <div className="CardMiddle">
        <img src={ap37} alt="" />

        <div className="CardMiddleTitleArrow">
          <a>Home Design</a>
          <FaAngleRight />
        </div>
      </div>
      <div className="CardRight">
        <div className="InsideCard">
          <h3>CONSULTORIA EM HOME DESIGN</h3>
          <p>fazemos consultoriasa dsafsdfasdfas fasdfadsfds dasdas gasds</p>
          <a href="">
            Leia mais <FaAngleRight />
          </a>
        </div>
      </div>
    </section>
  );
};
