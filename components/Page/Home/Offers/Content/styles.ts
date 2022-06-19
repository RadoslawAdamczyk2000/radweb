import styled from 'styled-components';
export const ContentWrapper = styled.section`
    align-items:flex-end;
    display:flex;
    flex-flow:column;
    justify-content:flex-start;
    position:sticky;
    row-gap:1rem;
    text-align:end;
    top:6rem;
    & > *:not(div) { 
        width:100%;
    }
    & > h2{
        font-size:5rem;
        font-weight:500;
        padding:.25rem .45rem;
    }
    & > p {
        font-size:1.8rem;
        line-height:2;
        padding:.35rem;
        opacity:.75;
    }
    & > div{
        padding:.85rem 1.1rem;
        & > a{
            align-items:center;
            background-color:${({theme}) => theme.colors.primary};
            color:${({theme}) => theme.colors.color};
            display:flex;
            font-size:2.1rem;
            font-weight:700;
            justify-content:center;
            padding:.95rem 1.85rem;
            transition:.2s linear background-color,.2s linear color;
            &:focus,
            &:hover{
                background-color:${({theme}) => theme.colors.color};
                color:${({theme}) => theme.colors.primary};

            }
        }
    }
    @media only screen{
        @media (max-width:680px){
            align-items:center;
            justify-content:center;
            row-gap:.5rem;
            text-align:center;
        }
        @media (max-width:570px){
            & > h2{
                font-size:3rem;
                font-weight:500;
            }
            & > p {
                font-size:1.65rem;
                line-height:2;
            }
            & > div{
                & > a{
                    font-size:1.7rem;
                    padding:.65rem 1.35rem;
                }
            }
        }
    }
`