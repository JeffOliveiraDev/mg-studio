import { StyledDashboard } from "./style";
import { motion } from "framer-motion";
import { BoxCardsHeader } from "../../components/Cards";
import { InsideHeader } from "../../components/HeaderAbout";
import { Header } from "../../components/Header";
import { AboutUs } from "../../components/AboutUs";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

import { HowWeWork } from "../../components/HowWeWork";

import { render } from "react-dom";
import { WorkImgs } from "../../components/WorkImgs";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Header />
      <InsideHeader />
      <BoxCardsHeader />
      <div className="BoxAboutAndHow">
        <AboutUs />
        <HowWeWork />
        <WorkImgs />

        <section className="SayingAboutUs"></section>
      </div>
    </StyledDashboard>
  );
};
