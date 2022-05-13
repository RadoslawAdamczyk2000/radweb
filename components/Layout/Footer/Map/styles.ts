import styled from 'styled-components';
export const MapWrapper = styled.div`
    align-items:center;
    aspect-ratio:16/9;
    display:flex;
    justify-content:center;
    max-height:40rem;
    width:100%;
    @media only screen {
        @media  (min-width:1500px){
            max-height:60rem;
            /* width:70rem; */
        }
    }
    & > iframe{
        all:unset;
        height:100%;
        width:100%;
    }
`