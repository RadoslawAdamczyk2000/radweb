import styled from 'styled-components';
export const MenuWrapper = styled.div`
    & > div{
        display:grid;
        grid-gap:.75rem;
        grid-template-columns:repeat(5,1fr);
        padding:.5rem .85rem;
        & > div{
            align-items:flex-start;
            display:flex;
            flex-flow:column;
            justify-content:flex-start;
            &:first-of-type{
                padding:.5rem;
                row-gap:.5rem;
                width:100%;
            }
        }
    }
    @media only screen {
        @media (max-width:715px){
            & > div{
                grid-gap:.45rem;
                grid-template-columns:repeat(1,1fr);
                padding:.5rem .15rem;
                & > div{
                    &:first-of-type{
                        align-items:center;
                        grid-column:1/-1;
                    }
                    .head{
                        justify-content:center;
                    }
                    ul{
                        align-items:center;
                    }
                }
            }
        }
    }
`