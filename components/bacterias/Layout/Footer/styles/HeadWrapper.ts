import styled from 'styled-components';
export const HeadWrapper = styled.div`
    @media only screen {
        @media (max-width:1550px){
            display:grid;
            grid-template-columns:2fr 2.5fr;
            width:105rem;
        }
        @media (max-width:1220px){
            align-items:start;
            display:flex;
            flex-direction:column;
            max-width:95%;
            width:75rem;
        }
        @media (max-width:820px){
            align-items:start;
            display:flex;
            flex-direction:column;
            max-width:95%;
            width:45rem;
        }
    }
`