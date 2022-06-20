import styled from 'styled-components';
export const Wrapper = styled.footer`
    align-items:center;
    display:flex;
    flex-flow:column;
    justify-content:center;
    row-gap:2rem;
    & > * {
        width:100%;
    }
    & > .micro{
        display:grid;
        grid-template-columns:4fr 2fr 3fr;
        @media only screen {
            @media (max-width:500px){
                grid-template-columns:1fr 1fr;
            }
            @media (max-width:420px){
                align-items:center;
                display:flex;
                flex-flow:column;
                row-gap:1rem;
                & > * {
                    width:100%;
                }
            }
        }
    }
`