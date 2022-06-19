import styled, { keyframes } from 'styled-components';
import { IntContentWrapper } from './interface';
const bar = keyframes`
    0%{
        height:.25rem;
        width:0;
    }
    25%{
        height:.25rem;
        width:100%;
    }
    75%{
        height:100%;
        width:100%;
    }
    100%{
        height:100%;
        width:100%;
    }
`

export const ContentWrapper = styled.div<IntContentWrapper>`
    background-attachment:fixed;
    background-blend-mode:overlay;
    background-color:${({theme}) => theme.colors.tertiary};
    background-image:url('${({image}) => image}') ;
    background-position:center;
    background-size:cover;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    margin:4rem 0 .25rem;
    padding:4rem  4.5rem;
    width:100%;
    & > section{
        align-items:flex-start;
        color:${({theme}) => theme.colors.background};
        display:flex;
        flex-flow:column;
        grid-column:1;
        justify-content:flex-start;
        row-gap:2rem;
        & > h2{
            font-size:5rem;
        }
        & > p {
            font-size:2.2rem;
            font-weight:700;
            line-height:2;
        }
        & > div {
            & > a{
                color:${({theme}) => theme.colors.background};
                font-size:2.7rem;
                font-weight:600;
                padding:1rem 1.5rem;
                position:relative;
                text-align:center;
                transition:.2s .2s linear color;
                z-index:0;
                &::before{
                    background:${({theme}) => theme.colors.background};
                    bottom:0;
                    height:.25rem;
                    width:0;
                    left:0;
                    z-index:-1;
                }
                &:focus,
                &:hover{
                    color:${({theme}) => theme.colors.tertiary};
                    transition:.2s linear color;
                    &::before{
                        animation:${bar} 1.15s linear 1;
                        height:100%;
                        width:100%;
                    }
                }
            }
        }
    }
    @media only screen {
        @media (max-width:730px){
            & > section{
                grid-column:1/-1;
            }
        }
        @media (max-width:550px){
            & > section{
                & > p {
                    font-size:1.7rem;
                    font-weight:600;
                    line-height:2;
                }
            }
        }
        @media (max-width:400px){
            & > section{
                & > h2{
                    font-size:3rem;
                }
                & > div {
                    & > a{
                        font-size:2.1rem;
                        padding:.75rem 1rem;
                    }
                }
            }
        }
    }
`