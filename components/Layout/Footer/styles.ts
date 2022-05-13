import styled from 'styled-components';
export const FooterWrapper = styled.footer`
    background:#ddd;
    padding:1rem 0;
    & > div{
        &:first-of-type{
            display:grid;
            grid-template-columns:1fr 3fr 2fr;
            padding:1rem .85rem;
            & > * {
                margin:0 auto;
            }
            @media only screen {
                @media (max-width:950px){
                    align-items:center;
                    display:flex;
                    flex-flow:column-reverse;
                    justify-content:center;
                    & > * {
                        width:100%;
                    }
                }
            }
        }
        &:nth-of-type(2){
            align-items:center;
            display:flex;
            justify-content:center;
        }
    }
`