import styled from 'styled-components';
export const Cards = styled.ul`
    align-items:start;
    display:flex;
    flex-flow:row wrap;
    gap:1rem;
    justify-content:center;
    padding:2rem 0;
`
export const CardWrapper = styled.li`
    align-items:center;
    border-radius:.85rem;
    cursor:pointer;
    display:flex;
    flex-flow:column;
    justify-content:start;
    max-width:95%;
    padding:.85rem 1.25rem;
    row-gap:.65rem;
    transition:.2s linear box-shadow;
    width:35rem;
    & > * {
        text-align:center;
        width:100%;
    }
    & > h2{
        color:${({theme}) => theme.colors.primary};
        font-size:2.75rem;
    }
    & > p{
        color:${({theme}) => theme.colors.headings.subtitle};
        font-size:1.65rem;
        line-height:calc(1.65rem * 1.8);
    }
    &:hover{
        box-shadow:0 0 1.5rem ${({theme}) => theme.colors.tertiary};
    }
`