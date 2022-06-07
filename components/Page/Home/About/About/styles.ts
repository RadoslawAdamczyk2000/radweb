import styled from 'styled-components';
export const AboutWrapper = styled.div`
    margin:4rem 0;
    padding:0 5rem;
    @media only screen{
        @media (max-width:925px){
            padding:0 1rem;
        }
        @media (max-width:425px){
            padding:0 .25rem;
        }
    }
    & > div{
        display:grid;
        grid-template-columns:1.85fr 2.5fr;
        grid-column-gap:.5rem;
        @media only screen{
            @media (max-width:650px){
                align-items:center;
                display:flex;
                flex-flow:column;
                justify-content:center;
                row-gap:.85rem;
                & > * {
                    width:100%;
                }
            }
        }
    }
`