import styled from 'styled-components';
export const MapWrapper = styled.div`
    margin:auto;
    width:100%;
    height:25rem;
    & > iframe{
        background:none;
        border:none;
        /* filter:grayscale(40%) brightness(75%); */
        height:100%;
        max-width:95%;
        outline:none;
        width:100%;
    }
`