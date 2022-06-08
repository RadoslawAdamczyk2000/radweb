import styled from 'styled-components';
export const SocialsWrapper = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    gap:.5rem;
    justify-content:flex-end;
    padding:0 2rem;
    @media only screen {
        @media (max-width:600px){
            padding:0 .5rem;
        }
        @media (max-width:515px){
            justify-content:center;
            width:100%;
        }
    }
`