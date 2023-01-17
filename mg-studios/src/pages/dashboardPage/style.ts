import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;

  header {
    width: 100%;
    height: 80px;
    background-color: #a08d7a95;
    position: relative;
    z-index: 3;
  }
  .BoxHeader {
    display: flex;
    width: 80%;
    height: 100%;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  .BoxHeader span {
    color: var(--orange);
  }
  .TitleHeader {
    color: var(--dark-brown);
  }
  .TitleHeader img {
    width: 200px;
  }
  .BoxBtns {
    display: flex;
    gap: 20px;
  }
  .BoxBtns button {
    color: var(--Color-white);
    font-size: 12px;
    transition: all 0.3s;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  }

  .BoxBtns button:hover {
    transform: scale(1.3);
  }
  .HeaderAbout {
    width: 100%;
    height: 80%;
  }
  .BackgroundHeader {
    width: 100%;
    height: 90%;
    position: absolute;
    top: 0;
    object-fit: cover;
    object-position: center;
    z-index: 1;
  }
  .BoxInsideAboutHeader {
    position: relative;
    z-index: 2;
    display: flex;
    width: 100%;
    height: 80%;
    color: var(--Color-white);
    justify-content: space-between;
  }

  .BoxLeftAbout {
    width: 80%;
    height: 50%;
    margin: auto;
    margin-top: 120px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    padding: 20px;
    border-radius: 30px;
  }
  .BoxLeftAbout span {
    color: var(--orange);
  }
  .BoxLeftBackGround {
    background-color: rgb(176, 163, 152, 0.7);
    /* background-color: #a08d7a80; */
    z-index: 1;
    position: absolute;
    width: fit-content;
    max-width: 450px;
    height: fit-content;
    padding: 20px;
    border-radius: 20px;
  }
  .BoxLeftAbout h3,
  h2 {
    line-height: 40px;
  }
  .BoxLeftAbout h3 {
    font-size: var(--font-14);
    color: var(--light);
  }
  .BoxLeftAbout h2,
  h4 {
    color: var(--light);
    font-size: var(--font-24);
  }
  .BoxLeftAbout h4 {
    color: var(--orange);
  }
  .BoxLeftAbout p {
    color: var(--light);
    margin-top: 10px;
    line-height: 23px;
  }
  .ContactIcons {
    display: flex;
    margin-top: 10px;
    gap: 15px;
  }
  .ContactIcons a {
    color: var(--light);
    transition: all 0.3s;
  }
  .ContactIcons svg {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  .ContactIcons a:hover {
    transform: scale(1.3);
  }
  .BoxLeftAbout a {
    margin-top: 20px;
    font-size: var(--font-14);
    font-weight: 600;
  }
  .BoxCards {
    width: 80%;
    height: 300px;
    margin: auto;
    display: flex;
    position: relative;
    top: -10%;
    z-index: 1;
    align-items: flex-end;
  }
  .CardLeft {
    width: 33.3%;
    height: 90%;
    background-color: var(--light);
    border-radius: 20px;
  }
  .CardLeft:hover {
    box-shadow: 0px 0px 4px 4px var(--light);
  }
  .CardMiddle {
    width: 33.3%;
    height: 100%;
    background-color: var(--light-brown);
    border-radius: 20px;
  }
  .CardMiddle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
  }
  .CardMiddle:hover {
    box-shadow: 0px 0px 4px 4px var(--light);
  }

  .CardMiddleTitleArrow {
    display: flex;
    position: relative;
    top: -60px;
    left: 10px;
    color: var(--Color-white);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
    transform: all 0.3s;
    cursor: pointer;
    transition: all 0.3s;
  }
  .CardMiddleTitleArrow a {
    max-width: 230px;
    font-size: 1.4rem;
    transition: all 0.3s;
  }
  .CardMiddleTitleArrow:hover {
    transform: scale(1.1) translate(10px);
  }

  .CardMiddleTitleArrow svg {
    font-size: 2rem;
  }

  .CardRight {
    width: 33.3%;
    height: 90%;
    background-color: var(--light);
    border-radius: 20px;
  }
  .CardRight:hover {
    box-shadow: 0px 0px 4px 4px var(--light);
  }
  .InsideCard {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    justify-content: space-between;
  }
  .InsideCard h3 {
    color: var(--dark-brown);
  }
  .InsideCard p {
    line-height: 23px;
    color: var(--light-dark);
  }
  .InsideCard a {
    display: flex;
    align-items: center;
    color: var(--dark-brown);
    transition: all 0.3s;
  }
  .InsideCard a:hover {
    transform: scale(1.1) translate(10px);
    color: var(--dark-brown);
  }

  /* ABOUT US */

  .BoxAboutUs {
    width: 80%;
    height: 80%;
    margin: auto;
    display: flex;

    justify-content: space-between;
  }
  .BoxAboutAndHow {
    display: flex;
    flex-direction: column;
  }

  .BoxImgAboutUs {
    width: 45%;
    height: 100%;
    display: flex;
  }
  .BoxImgAboutUs img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    max-height: 580px;
  }
  .BoxTextAboutUs {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1080px) {
    .BoxAboutUs {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .BoxImgAboutUs {
      height: 70%;
      width: 80%;
    }
    .BoxTextAboutUs {
      width: 80%;
      height: 100%;
    }
  }
  .BoxTextAboutUs h4 {
    font-size: var(--font-24);
    color: var(--light-brown);
  }
  .BoxTextAboutUs h2 {
    font-size: var(--font-32);
    color: var(--dark-brown);
  }
  .BoxTextAboutUs p {
    margin-top: 10px;
    line-height: 24px;
    font-size: var(--font-14);
    color: var(--light-brown);
  }

  .CheckList {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 60px;
    margin-top: 20px;
    align-items: flex-end;
  }

  .ChecklistLeft h4,
  svg {
    display: flex;
    align-items: center;
    color: var(--dark-brown);
    gap: 10px;
    font-size: var(--font-16);
  }
  .ChecklistRight h4,
  svg {
    display: flex;
    align-items: center;
    color: var(--dark-brown);
    gap: 10px;
    font-size: var(--font-16);
  }
  .ChecklistRight h4 {
    color: var(--light-brown);
  }
  .ChecklistLeft h4 {
    color: var(--light-brown);
  }
  .BoxExperienceClients {
    display: flex;
    width: 80%;
    height: 100%;
    margin: auto;
    margin-top: 20px;
    align-items: flex-end;
    justify-content: space-between;
    color: var(--dark-brown);
    font-weight: 800;
  }
  @media (max-width: 905px) {
    .BoxExperienceClients {
      justify-content: center;
      gap: 20px;
    }
  }
  .Experience {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Projects {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Clients {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* END ABOUT US */

  /* Procedures */

  .BoxProcedures {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background-color: var(--background-cards);
  }
  .HowWeWork {
    width: 80%;
    margin: auto;
    margin-top: 40px;
  }
  .HowWeWork h4 {
    color: var(--light-brown);
    font-size: var(--font-16);
  }
  .HowWeWork h2 {
    color: var(--dark-brown);
    font-size: var(--font-24);
  }
  .CardsHowWeWork {
    width: 80%;
    height: fit-content;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
  }
  .CardWork {
    padding: 20px;
    width: 100%;
    height: 200px;
    background-color: var(--card);
    display: flex;
    flex-direction: column;
    line-height: 24px;
  }
  .CardWork svg {
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
  }
  .CardWork h3 {
    font-size: var(--font-18);
    color: var(--dark-brown);
  }
  .CardWork p {
    font-size: var(--font-16);
    color: var(--dark-brown);
  }
  /* END HOWWEWORK */
  /* OUR WORK IMGS */
  .OurWorks {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .OurWorks h2 {
    width: 80%;
    margin: auto;
    margin-top: 40px;
    color: var(--dark-brown);
  }

  /* END OF WORK IMGS */

  .ContainerCarousel {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 80%;
    height: fit-content;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    transition: all 0.4s;
    justify-content: center;
  }
  .ContainerCarousel img {
    width: 340px;
    height: 250px;
    transition: all 0.3s;
    border-radius: 8px;
    box-shadow: 0 0 16px #333;
    background-color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
  .ContainerCarousel img:hover {
    transform: scale(1.5);
    border: solid 1px var(--card);
    box-shadow: 0px 0px 4px 4px var(--light);
    left: 50%;
  }

  /*  */
`;
// --font-62: 3.875rem;
//         --font-32: 2rem;
//         --font-24: 1.5rem;
//         --font-18: 1.125rem;
//         --font-16: 1rem;
//         --font-14: 0.875rem;
//         --font-12: 0.75rem;
//         --font-11: 0.688rem;
//         --font-10: 0.625rem;
