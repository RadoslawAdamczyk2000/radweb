import styled from 'styled-components';
export const LangWrapper = styled.div`
    align-items:center;
    color:${({theme}) => theme.colors.gray};
    cursor:pointer;
    display:flex;
    font-size:3rem;
    height:3.25rem;
    justify-content:center;
    transition:.15s ease-in-out color;
    width:3.25rem;
    &:focus,
    &:hover{
        color:${({theme}) => theme.colors.tertiary};
    }
`