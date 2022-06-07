import styled from 'styled-components';
export const ContentWrapper = styled.section`
    align-items:flex-end;
    display:flex;
    flex-flow:column;
    justify-content:flex-start;
    padding:.85rem 1.1rem;
    row-gap:2rem;
    text-align:end;
    & > h2{
        font-family:${({theme}) => theme.fonts.family.heading};
        font-size:4.25rem;
        letter-spacing:.45rem;
    }
    & > p {
        color:${({theme}) => theme.colors.gray};
        font-size:1.7rem;
        line-height:calc(1.7rem * 2);
    }
    @media only screen{
        @media (max-width:770px){
            padding:.45rem .5rem;
            row-gap:1rem;
            & > p {
                font-size:1.65rem;
                line-height:calc(1.65rem * 1.8);
            }
        }
        @media (max-width:650px){
            align-items:center;
            text-align:center;
        }
        @media (max-width:450px){
            & > h2{
                font-size:3.25rem;
                letter-spacing:.35rem;
            }
            & > p {
                font-size:1.6rem;
                line-height:calc(1.6rem * 2);
            }
        }
        @media (max-width:290px){
            padding:.45rem .25rem;
            & > h2{
                font-size:3rem;
                letter-spacing:.35rem;
            }
            & > p {
                font-size:1.55rem;
                line-height:calc(1.55rem * 1.75);
            }
        }
    }
`