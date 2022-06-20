import styled from 'styled-components';
import { Color } from './interface';
export const Wrapper = styled.li<Color>`
    /* background:red; */
    height:4rem;
    width:4rem;
    &,
    & > a{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a{
        color:${({color}) => color};
        font-size:3rem;
        overflow:hidden;
        position:relative;
        text-shadow:0 0 1rem ${({theme}) => theme.colors.background};
        transition:.2s linear color;
        z-index:0;
        & > *{
            text-shadow:0 0 1rem ${({theme}) => theme.colors.background};
        }
        &,
        &::before{
            height:100%;
            width:100%;
        }
        &::before{
            background-color:${({theme}) => theme.colors.color};
            border-radius:.45rem;
            top:110%;
            right:110%;
            transition:.2s linear background-color,.2s linear transform;
            z-index:-1;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.color};
            &::before{
                background-color:${({color}) => color};
                transform:translate(110%,-110%);
            }
        }
    }
`