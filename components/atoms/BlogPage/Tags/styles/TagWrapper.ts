import styled from 'styled-components';
export const TagWrapper = styled.li`
    align-items:center;
    background-color:${({theme}) => theme.colors.color};
    border-radius:2.75rem;
    color:${({theme}) => theme.colors.background};
    cursor:pointer;
    display:flex;
    font-size:2rem;
    font-weight:700;
    justify-content:center;
    padding:1.25rem 2.5rem;
    transition:.2s ease-in-out background-color,.2s ease-in-out transform;
    user-select:none;
    &:focus,
    &:hover{
        background-color:${({theme}) => theme.colors.tertiary};
        transform:scaleX(.9);
    }
`