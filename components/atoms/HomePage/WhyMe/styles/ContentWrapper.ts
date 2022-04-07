import styled from "styled-components";
export const ContentWrapper = styled.div`
    align-items:start;
    display:flex;
    flex-direction:column;
    height:100%;
    justify-content:start;
    padding:2rem;
    row-gap:2rem;
    & > h2{
        font-size:4rem;
    }
    & > div:first-of-type{
        font-size:2rem;
        line-height:3.2rem;
        padding:1rem;
    }
    @media only screen and (max-width:700px){
        padding:.75rem;
        & > h2{
            font-size:3.2rem;
        }
        & > div:first-of-type{
            font-size:1.75rem;
            line-height:2.8rem;
            padding:.5rem;
        }
        & > div:last-of-type{
            & > a {
                font-size:1.75rem;
                & > *{
                    font-size:inherit;
                }
            }
        }

    }
`