import { createGlobalStyle } from "styled-components";
import RobotoRegular from "../../src/fonts/Roboto-Regular.ttf";
import RobotoLight from "../../src/fonts/Roboto-Light.ttf";
import RobotoThin from "../../src/fonts/Roboto-Thin.ttf";
import RobotoBold from "../../src/fonts/Roboto-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'RobotoRegular' ;
        src: url( ${RobotoRegular}) format('truetype');
    }
    @font-face {
        font-family: 'RobotoLight' ;
        src: url( ${RobotoLight}) format('truetype');
    }
    @font-face {
        font-family: 'RobotoThin' ;
        src: url( ${RobotoThin}) format('truetype');
    }
    @font-face {
        font-family: 'RobotoBold' ;
        src: url( ${RobotoBold}) format('truetype');
    }

    body { 
        background-color:${(props) => props.theme.ThemePrimary.ColorBlue1};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0 !important;
        font-family: RobotoRegular;
        font-size: 62.5%;
    }
`;
