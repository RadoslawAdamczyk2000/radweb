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
    @media only screen {
        @media (max-width:1090px){
            grid-template-columns:1.25fr 2fr;
        }
        @media (max-width:800px){
            align-items:center;
            display:flex;
            flex-flow:column;
            row-gap:1rem;
            text-align:center;
            & > * {
                width:100%;
            }
        }
    }
`