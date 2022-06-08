import styled from 'styled-components';
export const OffersWrapper = styled.div`
    background-color:${({theme}) => theme.colors.color};
    color:${({theme}) => theme.colors.background};
    display:grid;
    grid-template-columns:1.5fr 2fr;
    grid-column-gap:1rem;
    padding:5rem .85rem;
    & > div{
        position:relative;
        &:last-of-type{
            align-items:center;
            display:flex;
            flex-flow:column;
            justify-content:start;
            padding:.5rem;
            row-gap:.5rem;
        }
    }
`