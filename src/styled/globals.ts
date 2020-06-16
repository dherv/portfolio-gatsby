import { createGlobalStyle } from "styled-components";
import { device } from "./media-queries";

export const GlobalStyle = createGlobalStyle`
    html {
      font-family: "Roboto", sans-serif;
      color: var(--text-color);
      line-height: 2;
    }

    body {
      font-size: 12px;
      @media ${device.mobileM} {
        font-size: 14px;
      }
      @media ${device.tablet} {
        font-size: 16px;
      }
    }

    h1, h2 {
      font-size: 16px
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      line-height: 1;
    }
`;
