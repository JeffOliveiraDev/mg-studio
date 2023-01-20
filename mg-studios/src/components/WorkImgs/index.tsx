import ap24 from "../../assets/apto industrial 24c-min.webp";
import ap24d from "../../assets/apto industrial 24d-2-min.webp";
import aab from "../../assets/apto industrial aab-min.webp";
import aa from "../../assets/apto industrial aa-min.webp";

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
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={ap24} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={aa} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={aab} alt="Third slide" />
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
