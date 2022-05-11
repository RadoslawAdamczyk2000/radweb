import styled from 'styled-components';
export const AboutWrapper = styled.section`
    align-items:center;
    display:flex;
    flex-flow:row wrap-reverse;
    justify-content:space-around;
    min-height:35rem;
    row-gap:2rem;
    & > figure{
        aspect-ratio:1/1;
        border-radius:50%;
        max-width:85%;
        overflow:hidden;
        position:relative;
        width:45rem;
        @media only screen{
            @media (min-width:1500px){
                width:65rem;
            }
        }

    }
    & > article{
        width:60rem;
        padding:4rem 2rem;
        & > h2{
            font-size:4.5rem;
            @media only screen{
                @media (min-width:1500px){
                    font-size:6.5rem;
                }
                @media (max-width:900px){
                    font-size:4rem;
                }
            }
        }
        & > p{
            padding:1rem;
            margin:1rem 0 2rem;
            font-size:1.8rem;
            line-height:calc(1.8rem * 2);
            @media only screen{
                @media (min-width:1500px){
                    font-size:2.15rem;
                    line-height:calc(2.15rem * 1.5);
                }
                @media (max-width:900px){
                    font-size:1.55rem;
                }
            }
        }
        & > a{
            background-color:black;
            border-radius:2.5rem;
            color:white;
            margin:.75rem auto;
            padding:1.25rem 2rem;
            text-align:center;
            transition:.2s linear background-color, .2s linear color, .2s linear transform;
            word-wrap:break-word;
            word-break:break-all;
            &:focus,
            &:hover{
                background-color:red;
                color:white;
                transform:scaleX(.95);
            }
            @media only screen{
                @media (min-width:1500px){
                    border-radius:3.5rem;
                    font-size:2.15rem;
                    font-weight:700;
                    padding:1.5rem 3.1rem;
                }
                @media (max-width:240px){
                    padding:.75rem 1rem;
                }
            }
        }
    }
`