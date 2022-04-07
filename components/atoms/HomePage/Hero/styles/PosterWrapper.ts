import styled from "styled-components";
export const PosterWrapper = styled.figure`
    border-radius:3.5rem;
    height:65rem;
    margin:auto;
    max-height:75rem;
    max-width:95%;
    position:relative;
    width:45rem;
    &::before{
        border-radius:3.5rem;
        background-color:${({theme}) => theme.colors.primary};
        box-shadow:0 0 2rem .5rem hsla(0,100%,0%, .25);
        left:3.5rem;
        top:-3.5rem;
        height:100%;
        width:100%;
    }
    @media only screen and (max-width:860px){
        &::before{
            left:2.5rem;
            top:-2.5rem;
        }
    }
    @media only screen and (max-width:550px){
        max-height:55rem;
        max-width:75%;
        &::before{
            display:none;
        }
    }   
`