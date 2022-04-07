import styled from "styled-components";
export const ButtonsWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:2rem;
    justify-content:center;
    @media only screen and (max-width:600px){
        flex-direction:column;
    }
`