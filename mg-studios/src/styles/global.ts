import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

    *{
        /* Typography */

        font-family: 'Inter', sans-serif;

        --font-62: 3.875rem;
        --font-32: 2rem;
        --font-24: 1.5rem;
        --font-18: 1.125rem;
        --font-16: 1rem;
        --font-14: 0.875rem;
        --font-12: 0.75rem;
        --font-11: 0.688rem;
        --font-10: 0.625rem;

    }

    *{
        /* Colors */

        /* Primary */
        --background-cards: #e1d7ca;
        --card: #f7f6f2;
        --light: #e6dfd8;
        --light-brown: #a08d7a;
        --dark-brown: #3e3524;
        --footer-brown: #5c4c3a;
        --light-dark: #675338;
        --footer: #57412f;
        --orange: #f4844c;
        

    }

    .BtnContact{
       padding: 5px 20px; 
        
        display: flex;
        width: fit-content;
        background-color: var(--dark-brown);
        border-radius: 35px;
        font-weight: 500;
        
        color: var(--Color-white);
        font-size: 12px;
        transition: all 0.3s;
    }

   
  .BtnContact:hover {
    transform: scale(1.3) translate(5px);
  }
    body::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}

    body::-webkit-scrollbar-track {
    background: linear-gradient(90deg, var(--dark-brown), var(--dark-brown), 1px,#111 0,#111);
}

    body::-webkit-scrollbar-thumb {
    background: var(--light-brown);
    border-radius: 16px;
    box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
}

`;
