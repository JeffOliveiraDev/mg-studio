import { StyledDashboard } from "./style";
import { BoxCardsHeader } from "../../components/Cards";
import { InsideHeader } from "../../components/HeaderAbout";
import { Header } from "../../components/Header";
import { AboutUs } from "../../components/AboutUs";
import { HowWeWork } from "../../components/HowWeWork";
import { WorkImgsSlider } from "../../components/WorkImgs";
import { WorkImgs } from "../../components/WorkImgs/workimgs";
import { Review } from "../../components/Review";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Header />

      <InsideHeader />
      <div className="BoxAboutAndHow">
        <BoxCardsHeader />

        <AboutUs />
        <HowWeWork />
        <WorkImgsSlider />
        <WorkImgs />
        <Review />
        <section className="ContactUsBottom">
          <div className="InsideFooter">
            <h2>TORNE SUA CASA EM UM LAR MELHOR AINDA COM NOSSOS DESIGNS</h2>
            <a
              target={"http://bit.ly/michellerosa"}
              href="http://bit.ly/michellerosa"
              className="BtnContactFooter"
            >
              ENTRE EM CONTATO
            </a>
          </div>
        </section>
      </div>

      <footer>
        <div className="BoxInsideFooter">
          <div className="FooterLeft">
            <h1>
              Mg <span>S</span>tudio
            </h1>
          </div>
          <div className="FooterRight">
            <h2>NOS CONTATE</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              voluptate velit cumque cupiditate eum.
            </p>
            <div className="FooterIcons">
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
          </div>
        </div>
      </footer>
    </StyledDashboard>
  );
};
