import styled from 'styled-components';
export const ThemeButtonWrapper = styled.div`
    align-items:center;
    color:${({theme}) => theme.colors.background};
    border-radius:.75rem;
    color:black;
    cursor:pointer;
    display:flex;
    font-size:2.45rem;
    height:3.85rem;
    justify-content:center;
    width:3.85rem;
    transition:.15s linear opacity,.15s linear transform;
    &:focus,
    &:hover{
        opacity:.75;
        transform:scale(.95);
    }
`