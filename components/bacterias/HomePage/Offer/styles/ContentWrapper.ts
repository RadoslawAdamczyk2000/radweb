import styled from "styled-components";
export const ContentWrapper = styled.section`
    display:grid;
    grid-template-columns:2fr 3fr;
    min-height:45rem;
    width:100%;
    & > div{
        align-items:center;
        display:flex;
        flex-direction:column;
        width:100%;
        &:first-of-type{
            align-items:start;
            justify-content:space-evenly;
        }
        &:last-of-type{
            justify-content:center;
        }
    }
    
    @media only screen and (max-width:1000px){
        display:flex;
        flex-direction:column;
        & > div{
            &:first-of-type{
                flex-direction:row;
                flex-wrap:wrap;
                gap:1rem;
                justify-content:center;
                padding:.75rem;
            }
        }
    }
    @media only screen and (max-width:710px){
        & > div{
            &:first-of-type{
                align-items:center;
                flex-direction:column;
                gap:1rem;
            }
        }
    }
`