import logo from "../../assets/logo-removebg-preview.webp";

export const Header = () => {
  return (
    <header>
      <section className="BoxHeader">
        <div id="home" className="TitleHeader">
          {/* <img src={logo} alt="" /> */}
          <h1>
            Mg <span>S</span>tudio
          </h1>
        </div>
        <div className="BoxBtns">
          <a href="#home">HOME</a>
          <a href="#about">SOBRE</a>
          <a href="#works">SERVIÇOS</a>
          <a
            target={"http://bit.ly/michellerosa"}
            href="http://bit.ly/michellerosa"
            className="BtnContact"
          >
            CONTATO
          </a>
        </div>
      </section>
    </header>
  );
};
