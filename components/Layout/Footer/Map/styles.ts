import styled from 'styled-components';
export const MapWrapper = styled.div`
    align-items:center;
    aspect-ratio:16/9;
    background:lime;
    display:flex;
    justify-content:center;
    max-width:95%;
    width:60rem;
    @media only screen {
        @media  (min-width:1500px){
            width:70rem;
        }
    }
    & > iframe{
        all:unset;
        height:100%;
        width:100%;
    }
`