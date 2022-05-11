import styled from 'styled-components';
export const MovieWrapper = styled.div`
    padding:2rem;
    @media only screen {
        @media (max-width:600px){
            padding:.5rem .25rem;
        }
        @media (max-width:350px){
            padding:0;
        }
    }
    &,
    & > div{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > div{
        aspect-ratio:16/9;
        width:95%;
        @media only screen {
            @media (max-width:350px){
                width:100%;
            }
        }
        & > iframe{
            all:unset;
            height:100%;
            width:100%;
        }
    }
`