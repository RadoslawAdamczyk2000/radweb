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
        & > p {
            color:${({theme}) => theme.colors.color};
            font-size:1.8rem;
            line-height:2.1;
            padding:.25rem;
        }
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
        @media (max-width:800px){
            & > section{
                & > p {
                    font-size:1.75rem;
                    line-height:1.8;
                }
            }
        }
        @media (max-width:500px){
            & > section{
                row-gap:.65rem;
                & > p {
                    font-size:1.6rem;
                    line-height:1.7;
                }
                & > div{
                    & > a{
                        font-size:2.25rem;
                    }
                }
            }
        }
    }
`