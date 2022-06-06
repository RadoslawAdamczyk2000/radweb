import styled from 'styled-components';
export const CardsWrapper = styled.ul`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:2rem;
    padding:2rem 4rem;
    & > li{
        &:nth-child(odd){
            margin:auto 0 auto auto;
        }
        &:nth-child(even){
            margin:auto auto auto 0;
        }
    }
    @media only screen {
        @media (max-width:980px){
            align-items:center;
            display:flex;
            flex-flow:row wrap;
            justify-content:space-evenly;
            & > li{
                &:nth-child(odd){
                    margin:auto;
                }
                &:nth-child(even){
                    margin:auto;
                }
            }
        }
        @media (max-width:800px){
            grid-gap:1rem;
            padding:2rem 2rem;
        }
        @media (max-width:765px){
            grid-gap:.5rem;
            padding:2rem .85rem;
        }
    }
`