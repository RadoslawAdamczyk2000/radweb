import styled from 'styled-components';
export const ContentWrapper = styled.div`
    margin:5rem 0;
    min-height:55rem;
    position:relative;
    z-index:0;
    @media only screen {
        @media (min-width:1450px){
            min-height:75rem;
        }
        @media (max-width:650px){
            min-height:60rem;
            height:auto;
        }
        @media (max-width:250px){
            min-height:70rem;
        }
        @media (max-width:230px){
            min-height:80rem;
        }
    }
    & > figure{
        min-height:55rem;
        position:relative;
        width:100%;
        z-index:-1;
        @media only screen {
            @media (min-width:1450px){
                min-height:75rem;
            }
            @media (max-width:650px){
                min-height:60rem;
                height:auto;
            }
            @media (max-width:250px){
                min-height:70rem;
            }
            @media (max-width:230px){
                min-height:80rem;
            }
        }
    }
    & > div {
        background-color:hsl(55, 77%, 20%,.85);
        position:absolute;
        display:grid;
        grid-template-columns:repeat(2,1fr);
        top:0;
        padding:2rem 5rem;
        height:100%;
        width:100%;
        z-index:1;
        @media only screen {
            @media (max-width:650px){
                padding:2rem 1rem;
            }
        }
        & > section{
            align-items:start;
            grid-column:1;
            display:flex;
            flex-flow:column;
            height:100%;
            justify-content:center;
            padding:0 1rem;
            row-gap:1rem;
            width:100%;
            @media only screen {
                @media  (max-width:790px){
                    grid-column:1/-1;
                }
                @media  (max-width:650px){
                    align-items:center;
                    padding:0 .5rem;
                }
            }
            & > h1{
                color:#fff;
                font-family:${({theme}) => theme.fonts.family.heading};
                font-size:5rem;
                @media only screen {
                    @media (min-width:1450px){
                        font-size:8rem;
                    }
                    @media (max-width:650px){
                        font-size:4rem;
                    }
                }
            }
            & > p {
                color:#fff;
                font-size:1.9rem;
                line-height:calc(1.9rem * 1.6);
                @media only screen {
                    @media (min-width:1450px){
                        font-size:2rem;
                        line-height:calc(2rem * 2);
                    }
                    @media (max-width:650px){
                        font-size:1.7rem;
                        line-height:calc(1.7rem * 1.8);
                    }
                }
            }
            & > div{
                & > a {
                    background-color:#ddd;
                    color:#000;
                    &:focus,
                    &:hover{
                        background-color:#fff;
                    }
                }
            }
        }
    }
`