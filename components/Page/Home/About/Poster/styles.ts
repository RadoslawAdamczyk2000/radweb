import styled from 'styled-components';
export const PosterWrapper = styled.div`
    height:60rem;
    margin:0 auto;
    padding:1rem;
    width:80%;
    & > figure{
        position:relative;
        height:100%;
        width:100%;
        transform:rotateY(180deg);
    }
    @media only screen {
        @media (min-width:1450px){
            height:70rem;
        }
        @media (max-width:1000px){
            aspect-ratio:3/4;
            height:auto;
            padding:.25rem;
            width:75%;
        }
        @media (max-width:600px){
            aspect-ratio:3/5;
            width:98%;
        }
        @media (max-width:540px){
            aspect-ratio:4/3;
        }
        @media (max-width:390px){
            aspect-ratio:4/5;
        }
    }
`