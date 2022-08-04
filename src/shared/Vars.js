import Playball from './Playball/Playball-Regular.ttf';
import LexendDeca from './Lexend_Deca/LexendDeca-VariableFont_wght.ttf';
import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Playball';
        src: url(${Playball}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Lexend Deca';
        src: url(${LexendDeca}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }   
`;

export default FontStyles;