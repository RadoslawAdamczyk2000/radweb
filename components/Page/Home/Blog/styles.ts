import styled from 'styled-components';
export const BlogWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-flow:column;
    margin:3rem auto;
    row-gap:2rem;
    width:70%;
    & > * {
        width:100%;
    }
    & > section{
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        row-gap:2rem;
        padding:1rem 0;
    }
    & > ul{
        align-content:center;
        display:grid;
        justify-items:center;
        grid-row-gap:1.5rem;
        grid-template-columns:repeat(2,1fr);
        padding:.85rem .25rem;
    }
    @media only screen {
        @media (min-width:1450px){
            width:90%;
            & > section{
                width:70%;
            }
            & > ul{
                grid-template-columns:repeat(3,1fr);
                grid-row-gap:2.5rem;
            }
        }
        @media (max-width:1140px){
            width:90%;
        }
        @media (max-width:680px){
            width:99%;
        }
        @media (max-width:650px){
            width:99%;
            & > ul{
                grid-template-columns:repeat(1,1fr);
            }
        }
    }
`