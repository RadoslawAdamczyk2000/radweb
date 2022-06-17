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
    }
`