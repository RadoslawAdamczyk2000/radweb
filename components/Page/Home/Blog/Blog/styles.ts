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
export const HeadingWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-flow:column;
    font-family:${({theme}) => theme.fonts.family.heading};
    justify-content:center;
    padding:2rem 4rem;
    row-gap:1rem;
    & > h2{
        text-align:center;
        &:first-of-type{
            color:${({theme}) => theme.colors.tertiary};
            font-size:7rem;
            letter-spacing:1rem;
        }
        &:last-of-type{
            color:${({theme}) => theme.colors.gray};
            font-size:4rem;
            letter-spacing:.5rem;
        }
        @media only screen {
            @media (max-width:400px){
                &:first-of-type{
                    font-size:5rem;
                }
                &:last-of-type{
                    font-size:2.2rem;
                }       
            }
            @media (max-width:250px){
                &:first-of-type{
                    font-size:3.5rem;
                    letter-spacing:.5rem;
                }
                &:last-of-type{
                    font-size:2.2rem;
                    letter-spacing:.25rem;
                }       
            }
        }
    }
`