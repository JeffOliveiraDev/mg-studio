import ap24 from "../../assets/apto industrial 24c-min.jpg";
import ap24d from "../../assets/apto industrial 24d-2-min.jpg";
import aab from "../../assets/apto industrial aab-min.jpg";
import aa from "../../assets/apto industrial aa-min.jpg";

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
