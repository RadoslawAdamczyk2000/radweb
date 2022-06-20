import styled from 'styled-components';
export const CardWrapper = styled.li`
    align-items:center;
    border:.15rem solid ${({theme}) => theme.colors.tertiary};
    color:${({theme}) => theme.colors.color};
    display:flex;
    flex-flow:column;
    justify-content:center;
    max-width:98%;
    padding:1rem .85rem;
    row-gap:1.5rem;
    width:38rem;
    & > div{
        background-color:${({theme}) => theme.colors.tertiary};
        border-radius:50%;
        height:7rem;
        width:7rem;
        align-items:center;
        display:flex;
        justify-content:center;
        & > p{
            color:${({theme}) => theme.colors.background};
            font-size:3rem;
            line-height:7rem;
            font-weight:900;
            user-select:none;
            &::first-letter{
                font-size:2.75rem;
            }
        }
    }
    & > section{
        text-align:center;
        width:100%;
        & > h3{
            color:${({theme}) => theme.colors.tertiary};
            font-size:3rem;
            font-weight:500;
        }
        & > p {
            font-size:1.65rem;
            line-height:2.2;
        }
    }

`