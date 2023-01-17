import ap24 from "../../assets/apto industrial 24c.jpg";
import ap24d from "../../assets/apto industrial 24d-2.jpg";
import aab from "../../assets/apto industrial aab.jpg";
import aa from "../../assets/apto industrial aa.jpg";

export const WorkImgs = () => {
  return (
    <section className="OurWorks">
      <h2>Veja um pouco do nosso trabalho</h2>

      <div className="ContainerCarousel">
        <img src={ap24} alt="" />
        <img src={ap24d} alt="" />
        <img src={aab} alt="" />
        <img src={ap24} alt="" />
        <img src={aa} alt="" />
        <img src={aab} alt="" />
        <img src={ap24} alt="" />
        <img src={aa} alt="" />
        <img src={aab} alt="" />
        <img src={ap24} alt="" />
        <img src={aa} alt="" />
      </div>
    </section>
  );
};
