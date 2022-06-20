import styled, { keyframes } from 'styled-components';
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
export const Primary = styled.div`
    &,
    & > a {
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a {
        color:${({theme}) => theme.colors.primary};
        font-size:3rem;
        min-height:4rem;
        min-width:12rem;
        padding:.75rem 1.35rem;
        position:relative;
        transition:.12s linear color;
        & > span{
            background-color:${({theme}) => theme.colors.primary};
            position:absolute;
            transition:.12s linear background-color;
            &:nth-of-type(even){
                left:0;
                height:.2rem;
                width:100%;
            }
            &:nth-of-type(odd){
                top:0;
                height:100%;
                width:.2rem;
            }
            &:nth-of-type(1){
                left:0;
            }
            &:nth-of-type(2){
                top:0;
            }
            &:nth-of-type(3){
                right:0;
            }
            &:nth-of-type(4){
                bottom:0;
            }
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.secondary};
            & > span{
                background-color:${({theme}) => theme.colors.secondary};
            }
        }
    }
    @media only screen {
        @media (min-width:1450px){
            & > a{
                font-size:3.5rem;
            }
        }
        @media (max-width:800px){
            & > a{
                font-size:2.75rem;
            }
        }
        @media (max-width:650px){
            & > a {
                font-size:2.2rem;
                min-height:2.5rem;
                padding:.55rem 1.15rem;
            }
        }
    }
`
export const Secondary = styled.div`
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
    @media only screen {
        @media (max-width:400px){
            & > a{
                font-size:2.1rem;
                padding:.75rem 1rem;
            }
        }
    }
`

export const Tertiary = styled.div`

`