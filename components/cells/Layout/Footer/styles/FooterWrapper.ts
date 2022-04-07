import styled from 'styled-components';
export const FooterWrapper = styled.footer`
    align-items:center;
    border-top:.3rem solid ${({theme}) => theme.colors.secondary};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:50rem;
    padding:6rem 2rem 4rem 2rem;
    row-gap:1rem;
    & > div{
        width:100%;
        &:first-of-type{
            display:grid;
            grid-template-areas:
                "news news info head head";
            & > div:nth-last-of-type(1){grid-area:head;}
            & > div:nth-last-of-type(2){grid-area:info;}
            & > div:nth-last-of-type(3){grid-area:news;}

            @media only screen {
                @media (max-width:1550px){
                    grid-template-areas:
                    "news news"
                    "info head";
                    padding:2.5rem 0;
                    grid-row-gap:5rem;
                }
                @media (max-width:820px){
                    grid-template-areas:
                    "head head"
                    "info news";
                    padding:2.5rem 0;
                    grid-row-gap:5rem;
                }
                @media (max-width:650px){
                    align-items:start;
                    display:flex;
                    flex-direction:column-reverse;
                    justify-content:center;
                    row-gap:1.75rem;
                }
            }

            & > *{
                margin:0 auto;
            }
        }
        &:last-of-type{
            @media only screen {
                @media (max-width:1550px){
                    align-items:center;
                    display:flex;
                    justify-content:center;
                }
            }
        }
    }
`