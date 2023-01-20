import ap24 from "../../assets/apto industrial 24c-min.webp";
import ap24d from "../../assets/apto industrial 24d-2-min.webp";
import aab from "../../assets/apto industrial aab-min.webp";
import aa from "../../assets/apto industrial aa-min.webp";
import a2 from "../../assets/apto industrial-2-min.webp";
import a3 from "../../assets/apto industrial-3-min.webp";
import a4 from "../../assets/apto industrial-4-min.webp";
import a5 from "../../assets/apto industrial-5-min.webp";
import a6 from "../../assets/apto industrial-6-min.webp";
import a7 from "../../assets/apto industrial-7-min.webp";
import a8 from "../../assets/apto industrial-8-min.webp";
import a9 from "../../assets/apto industrial-9-min.webp";
import a10 from "../../assets/apto industrial-10-min.webp";
import a11 from "../../assets/apto industrial-11-min.webp";
import a12 from "../../assets/apto industrial-12-min.webp";
import a13 from "../../assets/apto industrial-13-min.webp";
import a14 from "../../assets/apto industrial-14-min.webp";
import a18 from "../../assets/apto industrial-18-min.webp";

export const WorkImgsSlider = () => {
  return (
    <div className="carousel slide">
      <h2>Veja um pouco do nosso trabalho</h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={aa} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a12} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={aab} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a18} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a8} alt="5slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a4} alt="6 slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a5} alt="7 slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a6} alt="8 slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a7} alt="9 slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a9} alt="10 slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={a10} alt="11 slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ap24d} alt="12 slide" />
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
