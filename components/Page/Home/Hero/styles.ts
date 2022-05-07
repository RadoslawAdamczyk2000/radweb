import { motion } from 'framer-motion';
import styled from 'styled-components';
export const HeroWrapper = styled.header`
    position:relative;
`
export const OptionsWrapper = styled.div`
    background-color:hsla(0,100%,0%,.5);
    border-radius:2rem;
    display:none;
    position:absolute;
    user-select:none;
    &,
    & > ul{
        align-items:center;
        display:flex;
        gap:.45rem;
        justify-content:center;
    }
    .button,
    .slide{
        align-items:center;
        color:#fff;
        display:flex;
        justify-content:center;
    }
    .button{
        border-radius:50%;
        cursor:pointer;
        transition:.2s linear background-color, .2s linear color, .2s linear transform;
        & > * {
            transition:.2s linear transform;
        }
        &focus,
        &:hover{
            background-color:hsla(0,100%,100%,.85);
            color:#000;
        }
    }
    .slide{
        font-size:2rem;
        font-weight:900;
    }
 @media only screen {
     @media (min-width:601px){
         bottom:2rem;
         right:4rem;
         padding:.25rem 2rem;
         &,
         & > ul{
            flex-flow:row nowrap;
         }
         .button,
         .slide{
             height:3.5rem;
             width:3.5rem;
         }
         .button{
             font-size:2.45rem;
             &focus,
             &:hover{
                 transform:scale(.8);
                 & > *{
                    transform:scale(1.25);
                 }
             }
         }
     }
     @media (max-width:600px){
         top:2rem;
         right:1.5rem;
         padding:.45rem .35rem;
         &,
         & > ul{
            flex-flow:column;
         }
         .button,
         .slide{
             height:3rem;
             width:3rem;
         }
         .button{
             font-size:2.45rem;
             &focus,
             &:hover{
                 transform:scale(.8);
                 & > *{
                    transform:scale(1.25);
                 }
             }
         }      
     }
     @media (max-width:350px){
        background-color:hsla(0,100%,0%,.65);
         top:.95rem;
         right:.75rem;
         padding:.55rem .35rem;
         .button,
         .slide{
             height:2.65rem;
             width:2.65rem;
         }
         .button{
             font-size:2.35rem;
         }
         .slide{
            font-size:1.45rem;
         }        
     }
 }
`
export const SlideWrapper = styled(motion.div)`
    display:flex;
    flex-flow:row wrap-reverse;
    justify-content:space-around;
    height:60rem;
    & > * {
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > .content{
        align-items:start;
        flex-basis:50rem;
        flex-flow:column;
        & > h1,
        & > p{
            align-items:center;
            display:flex;
            justify-content:start;
            width:100%;
        }
        & > h1 {
            font-weight:700;
            padding:.25rem 0;
        }
        & > p {
            font-size:1.7rem;
            line-height:calc(1.7rem * 2);
            padding:.55rem;
            text-align:start;
        }
        & > a {
            background-color:#B0A5DB;
            border-radius:2.5rem;
            color:#000;
            font-size:1.8rem;
            margin:1rem auto;
            padding:1.15rem 2.25rem;
            transition:.2s linear background-color, .2s linear color, .2s linear transform;
            &:focus,
            &:hover{
                background-color:#6c63ff;
                color:#fff;
                transform:scaleX(.98);
            }
        }
    }
    & > .image{
        flex-basis:60rem;
        position:relative;
        & > div{
            border-radius:2.5rem;
            background-color:#ADA9BB;
            height:35rem;
            position:relative;
            width:55rem;
            & > div{
                position:absolute;
                top:50%;
                transform:translateY(-50%);
                left:-8.75rem;
                height:45rem;
                width:40rem;
                & > figure{
                    height:100%;
                    position:relative;
                    width:100%;
                }
            }
        }
    }
    @media only screen {
        @media (min-width:1500px){
            height:75rem;
            max-height:75rem;
            min-height:75rem;
            & > .content{
                flex-basis:65rem;
                & > h1 {
                    font-size:3.85rem;
                }
                & > p {
                    font-size:2.1rem;
                    line-height:calc(2.1rem * 2);
                }
                & > a {
                    border-radius:3.5rem;
                    font-size:2.4rem;
                    margin:3rem auto;
                    padding:1.35rem 3.75rem;
                    &:focus,
                    &:hover{
                        transform:scaleX(.96);
                    }
                }
            }
            & > .image{
                flex-basis:85rem;
                & > div{
                    border-radius:4.5rem;
                    height:40rem;
                    width:60rem;
                    & > div{
                        left:-15.75rem;
                        height:45rem;
                        width:50rem;
                    }
                }
            }
        }
        @media (max-width:1150px){
            height:60rem;
            & > .content{
                flex-basis:40rem;
            }
            & > .image{
                flex-basis:50rem;
                & > div{
                    height:35rem;
                    width:45rem;
                }
            }
        }
        @media (max-width:1050px){
            height:60rem;
            & > .content{
                flex-basis:40rem;
            }
            & > .image{
                flex-basis:40rem;
                & > div{
                    height:25rem;
                    width:35rem;
                    & > div{
                        width:30rem;
                    }
                }
            }
        }
        @media (max-width:850px){
            padding:2rem 0;
            min-height:auto;
            height:auto;
            & > .content{
                flex-basis:35rem;
                & > h1 {
                    font-size:2rem;
                }
                & > p {
                    font-size:1.6rem;
                    line-height:calc(1.6rem * 1.5);
                }
                & > a {
                    font-size:1.65rem;
                }
            }
            & > .image{
                flex-basis:30rem;
                & > div{
                    & > div{
                        left:-3rem;
                    }
                }
            }
        }
        @media (max-width:750px){
            min-height:35rem;
            & > .content{
                flex-basis:30rem;
                & > h1 {
                    font-size:2rem;
                }
                & > p {
                    font-size:1.6rem;
                    line-height:calc(1.6rem * 1.5);
                }
                & > a {
                    font-size:1.65rem;
                    padding:.65rem 2rem;
                }
            }
            & > .image{
                flex-basis:25rem;
                & > div{
                    width:25rem;
                    & > div{
                        left:-5rem;
                        width:28rem;
                    }
                }
            }
        }
        @media (max-width:600px){
            align-items:center;
            flex-flow:column-reverse;
            justify-content:center;
            row-gap:.75rem;
            & > .content{
                flex-basis:auto;
                width:85%;
            }
            & > .image{
                flex-basis:auto;
                & > div{
                    height:22rem;
                    width:20rem;
                    & > div{
                        width:20rem;
                    }
                }
            }
        }
        @media (max-width:350px){
            & > .content{
                flex-basis:auto;
                width:85%;
                & > a{
                    margin:1rem 0;
                }
            }
            & > .image{
                flex-basis:auto;
                & > div{
                    height:15rem;
                    width:20rem;
                    max-width:85%;
                    & > div{
                        left:1rem;
                        width:20rem;
                        max-width:95%;
                    }
                }
            }
        }
    }
`
