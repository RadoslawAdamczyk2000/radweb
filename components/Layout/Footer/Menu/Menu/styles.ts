import styled from 'styled-components';
export const Wrapper = styled.menu`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:.85rem;
    padding:.85rem .95rem;
    @media only screen {
        @media (max-width:600px){
            grid-template-columns:repeat(3,1fr);
        }
        @media (max-width:450px){
            grid-template-columns:repeat(2,1fr);
            & > li{
                &:nth-of-type(odd){
                    &,
                    & > a{
                        justify-content:flex-end;
                    }
                }
                &:nth-of-type(even){
                    &,
                    & > a{
                        justify-content:flex-start;
                    }
                }
            }
        }
        @media (max-width:260px){
            & > li:last-of-type{
                grid-column:1/-1;
                &,
                & > a{
                    justify-content:center;
                }
            }
        }
    }
`