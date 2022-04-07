import styled from 'styled-components';
export const TagWrapper = styled.li`
    &,
    & > button{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    border-radius:2rem;
    transition:.2s linear box-shadow;
    &:focus,
    &:hover{
        box-shadow:0 0 1.5rem ${({theme}) => theme.colors.tertiary};
    }
    button{
        color:${({theme}) => theme.colors.tertiary};
        font-size:1.45rem;
        font-weight:600;
        padding:1rem 2rem;
        height:100%;
        width:100%;
    }
`