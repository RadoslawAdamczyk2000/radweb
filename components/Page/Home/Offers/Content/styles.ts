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
    & > p {
        font-size:1.8rem;
        line-height:2;
        padding:.35rem;
        opacity:.75;
    }
    @media only screen{
        @media (max-width:680px){
            align-items:center;
            justify-content:center;
            row-gap:.5rem;
            text-align:center;
        }
        @media (max-width:570px){
            & > p {
                font-size:1.65rem;
                line-height:2;
            }
        }
    }
`