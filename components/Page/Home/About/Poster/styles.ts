import styled from 'styled-components';
export const PosterWrapper = styled.div`
    background:gold;
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
    }
`