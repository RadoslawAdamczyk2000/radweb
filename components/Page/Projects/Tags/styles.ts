import styled, { css } from 'styled-components';
interface tag {
    active:boolean;
}
export const Tags = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    gap:.25rem;
    justify-content:space-evenly;
    padding:1rem 1.25rem;
`
export const TagWrapper = styled.li<tag>`
    align-items:center;
    border-radius:.65rem;
    cursor:pointer;
    display:flex;
    font-size:3rem;
    height:4.25rem;
    justify-content:center;
    transition:.15s linear border;
    width:4.25rem;
    & > *{
        color:${({theme}) => theme.colors.tertiary};
        transition:.15s linear color, .15s linear transform;
    }
    ${(({active}) => active && css`
        border:.35rem solid ${({theme}) => theme.colors.secondary};
        & > * {
            color:${({theme}) => theme.colors.secondary};
        }
    `)}
    &:focus,
    &:hover{
        & > * {
            transform:scale(.9);
        }
    }
`