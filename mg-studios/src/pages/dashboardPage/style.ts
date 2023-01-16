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
  .BoxHeader span {
    color: var(--orange);
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
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 30px;
  }
  .BoxLeftAbout span {
    color: var(--orange);
  }
  .BoxLeftBackGround {
    background-color: #a08d7a80;
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
  }
  .BoxLeftAbout h2,
  h4 {
    font-size: var(--font-24);
  }
  .BoxLeftAbout h4 {
    color: var(--orange);
  }
  .BoxLeftAbout p {
    margin-top: 10px;
    line-height: 23px;
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
  }
  .CardMiddle {
    width: 33.3%;
    height: 100%;
    background-color: var(--light-brown);
  }
  .CardMiddle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .CardMiddle h4 {
    position: relative;
    top: -100px;
    left: 10px;
    color: var(--Color-white);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  }
  .CardMiddle svg {
    display: flex;
  }
  .CardRight {
    width: 33.3%;
    height: 90%;
    background-color: var(--light);
  }
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
