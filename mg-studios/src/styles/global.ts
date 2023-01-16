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

        --light: #e6dfd8;
        --light-brown: #a08d7a;
        --dark-brown: #3e3524;
        --light-dark: #675338;
        --footer: #57412f;
        --orange: #f4844c;


        /* Secondary */

        --Color-background-dark: #1d1e22;

        --Color-black: #01080E;
        --Color-teal: #00ADB5;
        --Color-white-text: #EEEEEE;
        --Color-white: #FFFFFF;
        --Color-grey: #393E46;
        --Color-line: rgba(238, 238, 238, 0.1);
        
        /* Alerts */
    
        --Sucess: #168821;
        --Warning: #FFCD07;
        --Negative: #E60000;
        --Information: #155BCB;

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
    transform: scale(1.3);
  }
    body::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}

    body::-webkit-scrollbar-track {
    background: linear-gradient(90deg,#434343,#434343 1px,#111 0,#111);
}

    body::-webkit-scrollbar-thumb {
    background: #434343;
    border-radius: 16px;
    box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
}

`;
