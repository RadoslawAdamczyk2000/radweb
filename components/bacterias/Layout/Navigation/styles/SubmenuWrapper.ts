import styled from "styled-components";
export const SubmenuWrapper = styled.li`
    position:relative;
    & > ul{
        align-items:start;
        border-radius:.45rem;
        background-color:#fff;
        box-shadow:0 0 1rem hsla(0,100%,100%,.25),0 0 1rem hsla(0,100%,0%,.15);
        color:${({theme}) => theme.colors.background};
        display:flex;
        flex-direction:column;
        /* opacity:0; */
        padding:1.2rem .75rem;
        position:absolute;
        row-gap:.75rem;
        transition:.2s linear opacity, .2s linear visibility;
        /* visibility:hidden; */
        width:25rem;
        @media only screen and (min-width:980px){
            left:0;
        }
    }
    @media only screen and (max-width:980px){
        & > ul{
            box-shadow:0 0 1rem hsla(0,100%,100%,.15),0 0 1rem hsla(0,100%,0%,.15);
            position:relative;
            max-width:95%;
        }   
    }
`