import styled from 'styled-components';
export const AboutWrapper = styled.div`
    display:grid;
    grid-template-columns:2.5fr 2.5fr;
    margin:2rem auto;
    width:85%;
    @media only screen {
        @media (min-width:1450px){
            grid-template-columns:2fr 2.5fr;
            margin:2rem auto 4rem;
        }
        @media (max-width:1000px){
            width:95%;
        }
        @media (max-width:600px){
            grid-template-columns:1.7fr 2.5fr;
            /* grid-template-columns:1fr;
            grid-row-gap:.5rem;
            width:75%; */
        }
        @media (max-width:540px){
            grid-template-columns:1fr;
            grid-row-gap:.5rem;
        }
    }
`