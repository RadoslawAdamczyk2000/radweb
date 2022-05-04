import { motion } from 'framer-motion';
import styled from 'styled-components';
export const HeroWrapper = styled.header`
    min-height:98vh;
    height:auto;
    overflow-x:hidden;
    max-height:auto;
    position:relative;
    width:100%;
    & > .options{
        align-items:center;
        background:red;
        bottom:2rem;
        display:flex;
        flex-flow:row nowrap;
        justify-content:center;
        position:absolute;
        right:4rem;
        user-select:none;
        & > .slide,
        & > .button{
            align-items:center;
            display:flex;
            height:3.5rem;
            justify-content:center;
            width:3.5rem;
        }
        & > .slide{
            font-weight:900;
        }
        & > .button{
            background:pink;
            font-size:2.75rem;
        }
        & > .progress{
            background-color:lime;
            border-radius:2rem;
            height:1.75rem;
            padding:.5rem .45rem;
            width:17rem;
            & > .bar{
                background-color:white;
                border-radius:2rem;
                height:100%;
                width:100%;
            }
        }
    }
`
export const SlideWrapper = styled(motion.div)`
    max-height:auto;
    &,
    & > figure{
        height:98vh;
        max-height:auto;
        position:relative;
        width:100%;
    }
    & > figcaption{
        align-items:flex-end;
        background-color:hsla(0,100%,0%,.15);
        display:flex;
        flex-flow:column;
        height:100%;
        justify-content:center;
        padding:2rem 4rem;
        position:absolute;
        row-gap:.5rem;
        top:0;
        user-select:none;
        width:100%;
        & > h1,
        & > h2{
            color: #fff;
            font-size:4rem;
            max-width:95%;
            padding:.5rem .75rem;
            text-shadow:0 0 1rem hsla(0.100%,0%,.25);
            @media only screen {
                @media (max-width:600px){
                    font-size:3.5rem;
                    padding:.35rem .45rem;
                }
            }
        }
        & > p{
            color: #fff;
            font-size:1.85rem;
            line-height:calc(1.85rem * 2);
            max-width:95%;
            padding:1rem 1.5rem;
            text-align:end;
            width:65rem;
            @media only screen {
                @media (max-width:600px){
                    font-size:1.65rem;
                    line-height:calc(1.65rem * 2);
                    max-width:98%;
                    padding:.85rem 1.25rem;
                }
            }
        }
        & > a{
            background-color:hsla(0,100%,100%,.75);
            color:#000;
            border-radius:2rem;
            padding:1.5rem 2.15rem;
            transition:.2s linear background-color, .2s linear transform;
            &:focus,
            &:hover{
                background-color:hsla(0,100%,100%,1);
                transform:scaleX(.95);
            }
        }
    }
`