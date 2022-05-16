import styled from 'styled-components';
export const CardWrapper = styled.li`
    background-color:#ddd;
    display:grid;
    grid-template-columns:2.5fr 3fr;
    height:30rem;
    width:55rem;
    @media only screen { 
        @media (min-width:1500px){
            width:65rem;
        }
        @media (max-width:1250px){
            align-items:center;
            display:flex;
            flex-flow:column;
            height:auto;
            justify-content:center;
            width:35rem;
        }
        @media (max-width:1190px){
            width:32rem;
        }
        @media (max-width:1090px){
            width:30rem;
        }
        @media (max-width:1025px){
            width:27rem;
        }
        @media (max-width:950px){
            width:35rem;
        }
        @media (max-width:790px){
            width:32rem;
        }
        @media (max-width:750px){
            width:28rem;
        }
        @media (max-width:635px){
            width:25rem;
        }
        @media (max-width:565px){
            display:grid;
            grid-template-columns:2fr 3fr;
            width:95%;
        }
        @media (max-width:450px){
            display:flex;
        }
    }
    & > div{
        height:100%;
        position:relative;
        width:100%;
        &:first-of-type{
            @media only screen { 
                @media (max-width:1250px){
                    aspect-ratio:4/3;
                    width:100%;
                }
                @media (max-width:565px){
                    aspect-ratio:auto;
                }
                @media (max-width:450px){
                    aspect-ratio:4/3;
                }
            }
            & > figure{
                height:100%;
                position:relative;
                width:100%;
            }
            /* width:1fr; */
        }
        &:last-of-type{
            align-items:flex-end;
            display:flex;
            flex-flow:column;
            justify-content:center;
            padding:.25rem 1.25rem .25rem .25rem; 
            @media only screen { 
                @media (max-width:1250px){
                    align-items:center;
                    padding:.5rem 1.85rem .5rem 1.85rem; 
                }
                @media (max-width:570px){
                    padding:.5rem 1rem; 
                }
            }
            & > h3{
                font-size:2.45rem;
                font-weight:500;
                @media only screen { 
                    @media (max-width:750px){
                        font-size:1.95rem;
                        padding:.2rem .4rem;
                    }
                }
            }
            & > a{
                color:blue;
                font-weight:900;
                text-decoration:underline;
                transition:.2s linear color;
                @media only screen { 
                    @media (max-width:750px){
                        font-weight:700;
                    }
                }
                &:focus,
                &:hover{
                    color:aqua;
                }
            }
            & > p {
                color:#333;
                font-size:1.65rem;
                line-height:calc(1.65rem * 2);
                text-align:end;
                @media only screen { 
                    @media (max-width:1250px){
                        font-size:1.6rem;
                        line-height:calc(1.6rem * 2);
                        text-align:center;
                    }
                    @media (max-width:750px){
                        font-size:1.55rem;
                        line-height:calc(1.55rem * 2);
                    }
                    @media (max-width:570px){
                        font-size:1.5rem;
                        line-height:calc(1.5rem * 2);
                    }
                }
            }
            /* width:2fr; */
        }
    }
`
export const CardsWrapper = styled.ul`
    align-items:start;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    gap:1rem;
    width:100%;
`