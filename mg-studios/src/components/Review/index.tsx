import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import aa from "../../assets/apto industrial aa-min.jpg";

export const Review = () => {
  return (
    <section className="SayingAboutUs">
      <div className="BoxCardsAboutUs">
        <h2>O que dizem de nós?</h2>
        <ul className="ListCardsAboutUs">
          <li className="CardAboutUs">
            <div className="InsideCardText">
              <h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci illo non veniam dolor ipsa in illum. Molestias, et nam.
              </h3>
            </div>
            <div className="InsideCardPhotoImgData">
              <img src={aa} alt="" />
              <div className="InsideCardNameJob">
                <div className="InsideCardStars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <h6>João Antonio</h6>
                <h6>Apicultor</h6>
              </div>
            </div>
          </li>
          <li className="CardAboutUs">
            <div className="InsideCardText">
              <h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci illo non veniam dolor ipsa in illum. Molestias, et nam.
              </h3>
            </div>
            <div className="InsideCardPhotoImgData">
              <img src={aa} alt="" />
              <div className="InsideCardNameJob">
                <div className="InsideCardStars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h6>João Antonio</h6>
                <h6>Apicultor</h6>
              </div>
            </div>
          </li>
          <li className="CardAboutUs">
            <div className="InsideCardText">
              <h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci illo non veniam dolor ipsa in illum. Molestias, et nam.
              </h3>
            </div>
            <div className="InsideCardPhotoImgData">
              <img src={aa} alt="" />
              <div className="InsideCardNameJob">
                <div className="InsideCardStars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <h6>João Antonio</h6>
                <h6>Apicultor</h6>
              </div>
            </div>
          </li>
          <li className="CardAboutUs">
            <div className="InsideCardText">
              <h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci illo non veniam dolor ipsa in illum. Molestias, et nam.
              </h3>
            </div>
            <div className="InsideCardPhotoImgData">
              <img src={aa} alt="" />
              <div className="InsideCardNameJob">
                <div className="InsideCardStars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6>João Antonio</h6>
                <h6>Apicultor</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
