import styled from "styled-components";
export const CardWrapper = styled.figure`
    align-items:center;
    background-color:lime;
    display:flex;
    height:40rem;
    justify-content:center;
    margin:auto;
    position:relative;
    width:60rem;
    & > figcaption{
        background-color:${({theme}) => theme.colors.secondary};
        height:100%;
        position:absolute;
        left:0;
        transition:.2s linear transform;
        width:35rem;
        a{
            padding:1rem 2rem;
            width:18rem;
        }
        &,
        & > div{
            align-items:start;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
        & > div{
            padding:.75rem;
            row-gap:1.5rem;
            h5{
                align-items:center;
                color:${({theme}) => theme.colors.tertiary};
                display:flex;
                justify-content:start;
                font-size:2.2rem;
                text-align:start;
                width:100%;
            }
            p{
                font-size:1.75rem;
                line-height:3rem;
                padding:.85rem;
                text-align:start;
                width:100%;
            }
        }
    }
    &:focus,
    &:hover{
        & > figcaption{
        }
    }
    @media only screen and (max-width:780px){
        margin:10rem auto;
        overflow:hidden;
        width:35rem;
        & > figcaption{
            box-shadow:0 -1rem 2rem hsla(0,100%,0%,.5);
            top:60%;
            transition:.2s linear transform;
        }
        &:focus,
        &:hover{
            & > figcaption{
                transform:translateY(-60%);
            }
        }
    }
`   