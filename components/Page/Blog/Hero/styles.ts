import styled from 'styled-components';
export const HeroWrapper = styled.header`
    display:grid;
    grid-template-columns:1.5fr 1.7fr;
    min-height:50rem;
    padding:1rem 0 1rem 3rem;
    @media only screen {
        @media  (min-width:1450px){
            grid-template-columns:1.5fr 1.2fr;
        }
        @media  (max-width:1050px){
            grid-template-columns:1.5fr 1.2fr;
        }
        @media  (max-width:950px){
            grid-template-columns:1.5fr 1fr;
            padding:1rem 0 1rem 1.5rem;
        }
        @media  (max-width:800px){
            grid-template-columns:1fr;
            padding:1.25rem .5rem;
        }
    }
    & > * {
        width:100%;
    }
    & > div{
        row-gap:.85rem;
        &,
        & > section{
            align-items:flex-start;
            display:flex;
            flex-flow:column;
            justify-content:center;
        }
        & > section{
            & > h1{
                font-size:4.5rem;
                font-weight:500;
                @media only screen{
                    @media  (min-width:1450px){
                        font-size:6.5rem;
                    }
                    @media  (max-width:800px){
                        text-align:center;
                        width:100%;
                    }
                }
            }
            & > p{
                color:#555;
                font-size:1.75rem;
                line-height:calc(1.75rem * 2.2);
                @media only screen {
                    @media  (min-width:1450px){
                        font-size:2.1rem;
                        line-height:calc(2.2rem * 2);
                        padding:1.25rem;
                    }
                    @media  (max-width:800px){
                        text-align:center;
                    }
                    @media  (max-width:360px){
                        font-size:1.65rem;
                        /* width:90%; */
                        padding:0 .5rem;
                        line-height:calc(1.65rem * 2);
                    }
                }
            }
        }
    }
    & > figure{
        height:100%;
        position:relative;
        @media only screen {
            @media  (min-width:1450px){
                height:65rem;
            }
            @media  (max-width:800px){
                display:none;
            }
        }
    }
`
