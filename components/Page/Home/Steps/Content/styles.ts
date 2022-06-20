import styled from 'styled-components';
export const ContentWrapper = styled.section`

        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        margin:1rem auto .5rem;
        row-gap:2rem;
        padding:1rem 0;
        text-align:center;
        width:65%;
        @media only screen {
                @media (max-width:590px){
                        width:90%;
                }
        }
`