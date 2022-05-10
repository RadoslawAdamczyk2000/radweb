import styled from 'styled-components';
export const CardWrapper = styled.li`
    background-color:#eee;
    transition:.2s linear background-color;
    & > a{
        align-items:center;
        display:flex;
        & > figure{
            position:relative;
        }
        & > figcaption{
            align-items:center;
            display:flex;
            flex-flow:column;
            width:100%;
            & > * {
                width:100%;
            }
            & > ul{
                align-items:center;
                display:flex;
                flex-flow:row;
                & > li{
                    align-items:center;
                    color:#333;
                    display:flex;
                    justify-content:center;
                }
            }
            & > h3 {
                align-items:center;
                display:flex;
                font-weight:500;
                justify-content:flex-end;
            }
            & > p{
                color:#333;
            }
        }
    }
    &.big{
        width:100%;
        @media only screen {
            @media (min-width:1500px){
                height:30rem;
            }
            @media (max-width:670px){
                margin:auto;
                width:80%;
            }
            @media (max-width:350px){
                width:95%;
            }
        }
        & > a{
            flex-flow:row;
            height:100%;
            @media only screen {
                @media (max-width:1050px){
                    flex-flow:column;
                    & > *{
                        width:100%;
                    }
                }
            }
            & >figure{
                height:100%;
                width:25rem;
                @media only screen {
                    @media (min-width:1500px){
                        width:35rem;
                    }
                    @media (max-width:1050px){
                        height:30rem;
                        width:100%;
                    }
                }
            }
            & > figcaption{
                height:100%;
                width:calc(100% - 20rem);
                @media only screen {
                    @media (min-width:1500px){
                        width:calc(100% - 35rem);
                    }
                    @media (max-width:1050px){
                        height:auto;
                        padding:2rem 0;
                        width:100%;
                    }
                }
                & > * { 
                    width:100%;
                }
                & > ul{
                    gap:.25rem;
                    justify-content:flex-end;
                    margin:.85rem 0;
                    @media only screen {
                        @media (min-width:1500px){
                            padding-right:1rem;
                        }
                    }
                    & > li{
                        font-size:2.6rem;
                        height:2.85rem;
                        width:2.85rem;
                        @media only screen {
                            @media (min-width:1500px){
                                font-size:3.25rem;
                                height:3.5rem;
                                width:3.5rem;
                            }
                        }
                    }
                }
                & > h3{
                    font-size:2.8rem;
                    padding:0 1rem;
                    @media only screen {
                        @media (min-width:1500px){
                            font-size:3.3rem;
                        }
                    }
                }
                & > p {
                    font-size:1.65rem;
                    line-height:calc(1.65rem * 2);
                    padding:.75rem;
                    @media only screen {
                        @media (min-width:1500px){
                            font-size:1.85rem;
                            line-height:calc(1.85rem * 2);
                        }
                    }
                }
            }
        }
    }
    &.small{
        margin:auto;
        width:100%;
        @media only screen {
            @media (max-width:750px){
                width:80%;
            }
            @media (max-width:350px){
                width:95%;
            }
        }
        & > a{
            flex-flow:column;
            & > figure{
                height:20rem;
                width:100%;
                @media only screen {
                    @media (min-width:1500px){
                        height:30rem;
                    }
                }
            }
            & > figcaption{
                padding-top:2rem;
                row-gap:1rem;
                & > ul{
                    justify-content:center;
                    gap:1rem;
                    grid-template:.5rem;
                    & > li{
                        font-size:2.8rem;
                        height:3rem;
                        width:3rem;
                        @media only screen {
                            @media (max-width:950px){
                                font-size:2.2rem;
                                height:2.75rem;
                                width:2.75rem;
                            }
                        }
                    }
                }
                & > h3{
                    font-size:2.8rem;
                    padding:0 1rem;
                    @media only screen {
                        @media (min-width:1500px){
                            font-size:3.2rem;
                        }
                        @media (max-width:950px){
                            font-size:2.2rem;
                        }
                    }
                }
                & > p {
                    font-size:1.75rem;
                    line-height:calc(1.75rem * 2);
                    padding:.85rem;
                    @media only screen {
                        @media (min-width:1500px){
                            font-size:1.95rem;
                            line-height:calc(1.95rem * 2);
                        }
                        @media (max-width:950px){
                            font-size:1.65rem;
                            line-height:calc(1.65rem * 2);
                        }
                    }
                }
            }
        }
    }
    &:focus,
    &:hover{
        background-color:#fff;
    }
`
export const ProjectsWrapper = styled.section`
    & > article{
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
            line-height:calc(1.6rem * 2);
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
    }
    & > div:first-of-type{
        align-items:start;
        display:flex;
        flex-flow:column;
        justify-content:center;
        & > .bottom,
        & > .top{
            display:grid;
            gap:.5rem;
            padding:.5rem;
        }
        & > .bottom{
            grid-template-columns:repeat(3,1fr);
            width:100%;
            @media only screen {
                @media (max-width:750px){
                    display:flex;
                    flex-flow:column;
                }
            }
        }
        & > .top{
            grid-template-columns:repeat(2,1fr);
            @media only screen {
                @media (max-width:670px){
                    display:flex;
                    flex-flow:column;
                }
            }
        }
    }
    & > div:last-of-type{
        align-items:center;
        display:flex;
        justify-content:center;
        padding:1rem 0;
        & > a{
            background-color:black;
            border-radius:2.5rem;
            color:white;
            margin:.75rem auto;
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
`