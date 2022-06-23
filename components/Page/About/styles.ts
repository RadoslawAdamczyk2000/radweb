import styled from 'styled-components';
export const AboutHomeWrapper  = styled.main`
    align-self:flex-start;
    display:grid;
    grid-gap:.85rem;
    grid-template-columns:repeat(7,1fr);
    justify-self:center;
    margin:2rem auto;
    width:90%;
    @media only screen {
        @media (max-width:930px){
            align-items:center;
            display:flex;
            flex-flow:column;
            justify-content:flex-start;
            row-gap:1rem;
            & > * {
                width:100%;
            }
        }
    }
`