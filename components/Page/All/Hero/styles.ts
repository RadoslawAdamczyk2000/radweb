import styled from 'styled-components';
export const HeroWithImageWrapper = styled.header`
    align-items:center;
    display:flex;
    flex-flow:column;
    padding:5rem 0;
    position:relative;
    row-gap:2rem;
    & > * {
        max-width:90%;
        width:80rem;
        @media only screen {
            @media (min-width:1500px){
                width:95rem;
            }
        }
    }
    & > figure{
        aspect-ratio:16/9;
        filter:drop-shadow(0 0 2rem hsla(0,100%,0%,.24));
        position:relative;
    }
    & > h1{
        font-size:5rem;
        @media only screen {
            @media (min-width:1500px){
                font-size:6rem;
            }
            @media (max-width:600px){
                font-size:3.8rem;
            }
            @media (max-width:400px){
                font-size:3.2rem;
            }
            @media (max-width:300px){
                font-size:2.9rem;
            }
        }
    }
    & > p {
        font-size:1.9rem;
        font-weight:600;
        line-height:calc(1.9rem * 2.1);
        text-indent:2rem;
        text-align:justify;
        @media only screen {
            @media (min-width:1500px){
                font-size:2.1rem;
                line-height:calc(2.1rem * 2.5);
            }
            @media (max-width:600px){
                font-size:1.8rem;
                line-height:calc(1.8rem * 2);
            }
            @media (max-width:500px){
                font-weight:400;
                text-align:end;
                text-indent:0;
            }
            @media (max-width:400px){
                font-size:1.65rem;
                line-height:calc(1.65rem * 2);
            }
        }
    }
`