import styled from 'styled-components';
export const ItemWrapper = styled.li`
    & > a {
        align-items:center;
        color:${({theme}) => theme.colors.background};
        display:flex;
        font-size:3rem;
        height:4.5rem;
        justify-content:center;
        transition:.15s ease-in-out color;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.primary};
        }
    }

`