import { createGlobalStyle } from 'styled-components';
import backgroundH from '../img/elements_horizontal_bw.png';


const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: rgb(223, 223, 223);
    text-shadow: 1px 1px 0px black;
}

body{
    background-image: url(${backgroundH});
    background-repeat: repeat-y;
    background-size: cover;
    background-position: top center;
    width: 100%;
    height: 100vh;
}

`


export default GlobalStyles;