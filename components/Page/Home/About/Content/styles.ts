import styled from 'styled-components';
export const ContentWrapper = styled.div`
    & > section{
        align-items:flex-end;
        display:flex;
        flex-flow:column;
        justify-content:flex-end;
        padding:.85rem .65rem;
        row-gap:1rem;
        text-align:end;
    }
    @media only screen {
        @media (min-width:1450px){
            & > section {
                row-gap:2rem;
                & > p{
                    font-size:2.2rem;
                    line-height:2;
                }
            }
        }
        @media (max-width:500px){
            & > section{
                row-gap:.65rem;
                & > div{
                    & > a{
                        font-size:2.25rem;
                    }
                }
            }
        }
    }
`