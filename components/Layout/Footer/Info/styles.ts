import styled from 'styled-components';
export const InfoWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    flex-flow:column;
    width:100%;
    @media only screen {
        @media (max-width:950px){
            align-items:center;
            justify-content:center;
            display:flex;
            flex-flow:column;
            max-width:95%;
            width:50rem;
        }
    }
`