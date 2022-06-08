import styled from 'styled-components';
export const InfoWrapper = styled.div`
    & > h4{
        font-size:2.5rem;
        font-weight:600;
        padding:.5rem .85rem;
    }
    @media only screen {
        @media (max-width:600px){
            & > h4{
                font-size:2rem;
            }
        }
        @media (max-width:515px){
            background-color:red;
            text-align:center;
            width:100%;
        }
    }
`