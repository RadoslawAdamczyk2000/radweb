import styled from "styled-components";
export const CardWrapper = styled.article`
    flex-shrink:0;
    margin:auto;
    max-height:auto;
    max-width:90%;
    min-height:50rem;
    width:45rem;
    & > figure{
        height:50rem;
        filter:grayscale(85%) brightness(75%);
        position:relative;
        transition:.2s linear filter;
        width:100%;
    }
    & > figcaption{
        padding:3rem 0;
        & > p{
            align-items:center;
            color:${({theme}) => theme.colors.primary};
            display:flex;
            font-size:2.1rem;
            font-weight:400;
            gap:.45rem;
            justify-content:flex-end;
            text-align:end;
            padding:.75rem .8rem;
            & > i {
                align-items:center;
                display:flex;
                font-size:inherit;
                justify-content:center;
            }
        }
        & > h5{
            color:${({theme}) => theme.colors.color};
            font-size:2.75rem;
            padding:.4rem .75rem;
            transition:.2s linear color;
        }
    }
    &:focus,
    &:hover{
        & > figure{
            filter:grayscale(0%) brightness(115%);
        }
        & > figcaption{
            & > h5{
                color:${({theme}) => theme.colors.tertiary};
            }
        }
    }
`