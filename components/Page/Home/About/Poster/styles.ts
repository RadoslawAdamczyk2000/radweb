import styled from 'styled-components';
export const PosterWrapper = styled.div`
    height:50rem;
    margin:0 auto auto auto;
    width:100%;
    @media only screen{
        @media (max-width:650px){
            aspect-ratio:4/3;
            height:auto;
            overflow:hidden;
            max-width:99%;
            width:55rem !important;
        }
    }
    & > figure{
        height:100%;
        position:relative;
        width:100%;
    }

`