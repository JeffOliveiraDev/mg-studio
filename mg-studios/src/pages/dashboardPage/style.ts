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
  }
  @media (max-width: 620px) {
    .BoxHeader {
      display: flex;
      flex-direction: column;
    }
    header {
      height: fit-content;
      padding-bottom: 10px;
    }
  }
  .BoxHeader span {
    color: var(--orange);
  }
  .TitleHeader {
    color: var(--light);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.9);
  }
  .TitleHeader img {
    width: 200px;
  }
  .BoxBtns {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .BoxBtns a {
    text-decoration: none;
    color: var(--light);
    font-size: 12px;
    transition: all 0.3s;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  }

  .BoxBtns a:hover {
    transform: scale(1.3);
  }
  .BoxBtns a:focus {
    transform: scale(1.3);
    color: var(--orange);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
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
    display: flex;
    width: 80%;
    height: 50%;
    margin: auto;
    margin-top: 120px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    padding: 20px;
  }
  .BoxLeftAbout span {
    color: var(--orange);
  }
  .BoxLeftBackGround {
    background-color: rgb(176, 163, 152, 0.8);
    /* background-color: #a08d7a80; */
    z-index: 1;
    position: absolute;
    width: fit-content;
    max-width: 450px;
    height: fit-content;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 16px #333;
    /* background-color: rgba(0, 0, 0, 0.75); */
  }
  @media (max-width: 600px) {
    .BoxLeftAbout {
      justify-content: center;
    }
  }
  @media (max-width: 424px) {
    .BoxLeftAbout {
      margin-top: 60px;
    }
  }
  @media (max-width: 310px) {
    .BoxLeftAbout {
      margin-top: 30px;
    }
  }
  @media (max-width: 294px) {
    .BoxLeftAbout {
      margin-top: 0px;
    }
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
    /* color: var(--light-dark); */
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    /* font-weight: 900; */
  }
  .BoxLeftAbout p {
    color: var(--light);
    margin-top: 10px;
    line-height: 23px;
  }
  .ContactIcons {
    display: flex;
    gap: 10px;
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
    text-decoration: none;
  }
  .AnchorOurWorks {
    margin-top: 20px;
  }
  .BoxLeftAbout a {
    font-size: var(--font-14);
    font-weight: 600;
    color: var(--light);
    text-decoration: none;
  }
  .BoxAboutAndHow {
    position: relative;
    top: -10%;
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
  @media (max-height: 815px) {
    .BoxCards {
      top: -5%;
    }
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
    box-shadow: 0 0 16px #333;
    z-index: 2;
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
    color: var(--light);
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
    box-shadow: 0 0 16px #333;
    border-radius: 20px;
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
    text-decoration: none;
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
    margin-top: 40px;
    justify-content: space-between;
  }
  @media (max-width: 840px) {
    .BoxCards {
      /* height: fit-content; */
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .CardLeft {
      width: 100%;
    }
    .CardMiddle {
      width: 100%;
      height: 50%;
    }
    .CardRight {
      width: 100%;
    }
    .BoxAboutUs {
      margin-top: 150px;
    }
  }

  @media (max-width: 662px) {
    .BoxAboutUs {
      margin-top: 200px;
    }
  }
  @media (max-width: 615px) {
    .BoxAboutUs {
      margin-top: 280px;
    }
  }
  @media (max-width: 405px) {
    .BoxAboutUs {
      margin-top: 320px;
    }
  }
  @media (max-width: 357px) {
    .BoxAboutUs {
      margin-top: 380px;
    }
  }
  @media (max-width: 300px) {
    .BoxAboutUs {
      margin-top: 410px;
    }
  }
  /* @media (max-width: 340px) {
    .BoxAboutUs {
      margin-top: 90%;
    }
  } */
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
    box-shadow: 0 0 16px #333;
    background-color: rgba(0, 0, 0, 0.75);
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
      margin-top: 30px;
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
  @media (max-width: 750px) {
    .CardsHowWeWork {
      flex-direction: column;
      width: 250px;
    }
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
    margin-top: 50px;
  }
  .OurWorks h2 {
    color: var(--dark-brown);
    font-size: 2rem;
    font-weight: 800;
    width: 80%;
    margin: auto;
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
    object-fit: fill;
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
  .carousel {
    width: 80%;
    height: fit-content;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  @media (min-width: 869px) {
    .carousel,
    .slide {
      display: none;
    }
    .OurWorks {
      display: show;
    }
  }
  @media (max-width: 868px) {
    .OurWorks {
      display: none;
    }
    .carousel {
      width: 95%;
    }
  }
  .carousel h2 {
    color: var(--dark-brown);
    font-size: 2rem;
    font-weight: 800;
    width: 80%;
    margin: auto;
  }

  .carousel-inner {
    width: 100%;
    height: 500px;
    margin: auto;
    transition: all 0.3s;
    box-shadow: 0 0 16px #333;
    background-color: rgba(0, 0, 0, 0.75);
  }
  .carousel-item {
    width: 100%;
    height: 100%;
  }
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: all 0.3s;
    border-radius: 8px;
    box-shadow: 0 0 16px #333;
    background-color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
  .carousel-inner:hover {
    transform: scale(1.2);
  }
  .carousel-item img:hover {
    border: solid 1px var(--card);
    box-shadow: 0px 0px 4px 4px var(--light);
    left: 50%;
  }

  /* SAYING ABOUT US */
  .SayingAboutUs {
    width: 100%;
    height: fit-content;
    background-color: var(--background-cards);
    padding-bottom: 40px;
  }
  .BoxCardsAboutUs {
    width: 80%;
    height: 70%;
    margin: auto;
    margin-top: 50px;
  }
  .BoxCardsAboutUs > h2 {
    color: var(--dark-brown);
  }
  .ListCardsAboutUs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 30px;
  }
  .CardAboutUs {
    background-color: var(--card);
    width: 300px;
    height: 150px;
    padding: 20px;
  }
  @media (max-width: 829px) {
    .SayingAboutUs {
      height: fit-content;
    }
    .ListCardsAboutUs {
      justify-content: center;
    }
  }
  .InsideCardText {
    display: flex;

    border-left: 3px solid var(--dark-brown);
    gap: 10px;
  }
  .CardAboutUs h3 {
    margin-left: 10px;
    margin-top: 10px;
    font-size: var(--font-12);
    color: var(--dark-brown);
  }
  .InsideCardPhotoImgData {
    display: flex;
    align-items: center;
    height: 50px;
  }
  .InsideCardPhotoImgData img {
    width: 40px;
    height: 40px;
    border-radius: 30px;
    margin-top: 10px;
  }
  .InsideCardNameJob {
    display: flex;
    flex-direction: column;
    height: 50px;

    justify-content: center;
    gap: 8px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .InsideCardNameJob h6 {
    font-size: var(--font-12);
    line-height: 0;
    color: var(--dark-brown);
  }
  .InsideCardStars {
    display: flex;
  }

  /*  */
  /* ContactUsBottom */

  .ContactUsBottom {
    width: 100%;
    height: 526px;
  }
  .InsideFooter {
    text-align: center;
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .InsideFooter h2 {
    color: var(--dark-brown);
    font-weight: 700;
  }

  .BtnContactFooter {
    padding: 15px 30px;

    display: flex;
    width: fit-content;
    background-color: var(--dark-brown);
    border-radius: 35px;
    font-weight: 500;

    color: var(--light);
    font-size: var(--font-16);
    transition: all 0.3s;
    box-shadow: 0 0 16px #333;
    text-decoration: none;
  }

  .BtnContactFooter:hover {
    transform: scale(1.3);
  }

  /*  */
  /* FOOTER */
  footer {
    width: 100%;
    height: 330px;
    background-color: var(--footer-brown);
  }
  .BoxInsideFooter {
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 380px) {
    .BoxInsideFooter {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      padding-bottom: 50px;
      padding-top: 30px;

      gap: 10px;
    }
  }
  .FooterLeft {
    width: 50%;
  }
  .FooterRight {
    color: var(--light);
    width: 30%;
  }
  .FooterRight h2 {
    font-size: var(--font-14);
    line-height: 10px;
  }
  .FooterRight p {
    font-size: var(--font-12);
  }
  .FooterIcons {
    display: flex;
    gap: 10px;
  }
  @media (max-width: 380px) {
    .FooterRight {
      width: 40%;
      display: flex;
      flex-direction: column;
    }
    .FooterIcons {
      width: 100%;
      justify-content: center;
    }
  }

  .FooterIcons a {
    transition: all 0.3s;
  }
  .FooterIcons svg {
    cursor: pointer;
    color: var(--light);
    width: 20px;
    height: 20px;
  }
  .FooterIcons a:hover {
    transform: scale(1.3);
    text-decoration: none;
  }
  .FooterLeft {
    color: var(--light);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  }

  .FooterLeft span {
    color: var(--orange);
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
