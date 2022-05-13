import styled from 'styled-components';
export const BlogWrapper = styled.section`
    border-radius:2rem;
    flex-flow:column;
    justify-content:start;
    & > * {
        align-items:flex-start;
        width:100%;
    }
    &,
    & > *{
        display:flex;
    }
    & > article{
        align-items:center;
        flex-flow:column;
        padding:2rem 8rem;
        row-gap:1rem;
        @media only screen{
            @media (max-width:900px){
                padding:2rem 2rem;
            }
        }
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
            line-height:calc(1.6rem * 2);
            text-align:center;
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
            margin:.75rem 0;
            padding:1.25rem 2rem;
            transition:.2s linear background-color, .2s linear color, .2s linear transform;
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
            }
        }
    }
   
    & > ul{
        display:flex;
        flex-flow:row nowrap;
        gap:1.5rem;
        justify-content:flex-start;
        padding:3rem 2rem;
        width:100%;
        @media only screen {
            @media (min-width: 850px) {
                justify-content:center;
                flex-flow:row wrap;
                overflow-x:scroll;
            }
        }
    }
`
export const CardWrapper = styled.li`
    flex-shrink:0;
    /* max-width:99.9%; */
    width:30rem;
    @media only screen {
        @media (max-width: 849px) {
            width:20rem;
        }
    }
    & > a{
        height:100%;
        &,
        & > *{
            align-items:start;
            display:flex;
            flex-flow:column;
            justify-content:start;
            width:100%;
        }
        & > figure{
            height:30rem;
            filter:saturate(40%) brightness(85%);
            position:relative;
            transition:.2s linear filter;
        }
        & > figcaption{
            & > * {
                padding:.25rem .2rem;
                width:100%;
            }
            & > h3{
                font-size:1.7rem;
                transition:.2s linear color;
            }
            & > p {
                text-align:end;
                font-size:1.5rem;
            }
            & > ul{
                align-items:center;
                display:flex;
                flex-flow:row wrap;
                gap:.2rem;
                justify-content:flex-end;
                padding:.8rem .4rem;
                & > li{
                    & > a{
                        align-items:center;
                        background-color:pink;
                        border-radius:2rem;
                        display:flex;
                        font-size:1.5rem;
                        font-weight:500;
                        justify-content:center;
                        padding:.25rem .75rem;
                        transition:.2s linear background-color,.2s linear color;
                        &:focus,
                        &:hover{
                            background-color:fuchsia;
                            color:white;
                        }
                    }
                }
            }
        }
    }
    &:focus,
    &:hover{
        & > a{
            & > figure{
                filter:saturate(100%) brightness(100%);
            }
            & > figcaption > h3 {
                color:purple;
            }
        }
    }
`