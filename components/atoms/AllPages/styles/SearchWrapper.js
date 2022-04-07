import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
export const SearchWrapper = styled(motion.div)`
    align-items:center;
    background-color:${({theme}) => theme.colors.background};
    box-shadow:0 0 .2rem .1rem ${({active,theme}) => active ? theme.colors.tertiary : theme.colors.primary}; 
    border-radius:5rem;
    column-gap:.5rem;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:7rem;
    justify-content:center;
    padding:2rem 4rem;
    transition:.2s linear box-shadow,.2s linear filter;
    max-width:95%;
    ${({active}) => active && css`
        filter:${({theme}) => theme.filter.search};
    `}
    & > *{
        flex-shrink:0;
    }
    & > input {
        /* background-color:white; */
        color:${({theme}) => theme.colors.primary};
        font-size:1.75rem;
        font-weight:500;
        letter-spacing:.25rem;
        line-height:4rem;
        text-align:center;
        transition:.2s linear color;
        width:calc(100% - 7rem);
        &:focus{
            color:${({theme}) => theme.colors.color};
        }
        &::placeholder{
            color:${({theme}) => theme.colors.primary};
            font-size:2.1rem;
            font-weight:700;
        }
    }
    & > button{
        align-items:center;
        color:${({theme}) => theme.colors.primary};
        display:flex;
        font-size:3rem;
        justify-content:center;
        padding:1.5rem;
        transition:.2s linear color, .2s linear transform;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.color};
            transform:rotate(15deg) scale(.95);
        }
    }
`