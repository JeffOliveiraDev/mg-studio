import { StyledDashboard } from "./style";

import { BoxCardsHeader } from "../../components/Cards";
import { InsideHeader } from "../../components/HeaderAbout";
import { Header } from "../../components/Header";
import { AboutUs } from "../../components/AboutUs";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Header />
      <InsideHeader />
      <BoxCardsHeader />
      <AboutUs />
    </StyledDashboard>
  );
};
