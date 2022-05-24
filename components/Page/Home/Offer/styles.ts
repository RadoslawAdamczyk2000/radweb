import styled from 'styled-components';
export const CardWrapper = styled.li`
    box-shadow:0 0 .25rem  .15rem hsla(0,100%,0%,.15);
    height:28rem;
    max-height:auto;
    width:55rem;
    @media only screen {
        @media (min-width:1500px){
            height:35rem;
            width:65rem;
        }
        @media (max-width:850px){
            height:32rem;
            width:30rem;
        }
        @media (max-width:730px){
            height:25rem;
            width:95%;
        }
        @media (max-width:420px){
            height:32rem;
        }
        @media (max-width:330px){
            height:36rem;
        }
        @media (max-width:260px){
            height:40rem;
        }
        @media (max-width:240px){
            height:43rem;
        }
        @media (max-width:220px){
            height:48rem;
        }
        @media (max-width:205px){
            height:55rem;
        }
    }
    & > a,
    & > a > *,
    & > a > * > div{ 
        height:100%;
        width:100%;
    }   
    & > a{
        align-items:center;
        display:flex;
        justify-content:center;
        position:relative;
        & > figure{
            position:relative;
        }
        & > figcaption{
            background-color:hsla(0,100%,100%,.99);
            padding:1rem;
            position:absolute;
            transition:.2s linear background-color;
            z-index: 2;
            @media only screen {
                @media (max-width:300px){
                    padding:.5rem;
                }
            }
            & > div{
                align-items:start;
                display:flex;
                flex-flow:column;
                justify-content:center;
                row-gap:1rem;
                @media only screen {
                    @media (max-width:550px){
                        row-gap:.25rem;
                    }
                }
                & > *{
                    width:100%;
                }
                & > span{
                    display:none;
                }
                & > h3{
                    color:${({theme}) => theme.colors.secondary};
                    font-size:1.95rem;
                    padding:1rem 2rem;
                    text-align:end;
                    transition:.2s linear color;
                    @media only screen {
                        @media (min-width:1500px){
                            font-size:2.65rem;
                        }
                        @media (max-width:550px){
                            padding:.5rem 2rem;
                        }
                        @media (max-width:300px){
                            padding:.25rem 1rem;
                        }
                    }
                }
                & > p{
                    font-size:1.55rem;
                    font-weight:500;
                    line-height:calc(1.55rem * 2);
                    padding:.75rem .65rem;
                    text-align:flex-start;
                    @media only screen {
                        @media (min-width:1500px){
                            font-size:1.75rem;
                            line-height:calc(1.75rem * 2);
                        }
                    }
                }
            }
        }
    }
    &:focus,
    &:hover{
        & > a{
            & > figcaption{
                background-color:hsla(0,100%,100%,.85);
                h3{
                    color:${({theme}) => theme.colors.headings.title};
                }
            }
        }
    }
`
export const OfferWrapper = styled.section`
    justify-content:center;
    position:relative;
    &,
    & > *{
        display:flex;
        flex-flow:row wrap;
    }
    @media only screen{
        @media (max-width:850px){
            flex-flow:column;
            & > * {
                width:100%;
            }
        }
    }
    & > article{
        align-items:flex-start;
        flex-flow:column;
        height:40rem;
        padding:1rem 0;
        width:55rem;
        @media only screen{
            @media (min-width:1500px){
                height:54rem;
                margin:0 auto;
                width:57rem;
            }
            @media (max-width:1120px){
                height:48rem;
                width:40rem;
            }
            @media (max-width:900px){
                height:45rem;
                width:35rem;
            }
            @media (min-width:850px){
                position:sticky;
                top:15rem;
            }
            @media (max-width:850px){
                height:auto;
                padding:1rem .25rem;
                width:100%;
            }
        }
        & > h2{
            color:${({theme}) => theme.colors.headings.title};
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
            color:${({theme}) => theme.colors.color};
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
        & > a{
            background-color:${({theme}) => theme.colors.headings.title};
            border-radius:2.5rem;
            color:${({theme}) => theme.colors.background};
            margin:.75rem auto;
            padding:1.25rem 2rem;
            transition:.2s linear background-color,.2s linear transform;
            &:focus,
            &:hover{
                background-color:${({theme}) => theme.colors.secondary};
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
        align-items:center;
        gap:.25rem;
        height:100%;
        justify-content:center;
        width:calc(100% - 55rem);
        @media only screen{
            @media (min-width:1500px){
                width:calc(100% - 80rem);
            }
            @media (max-width:1120px){
                width:calc(100% - 40rem);
            }
            @media (max-width:900px){
                width:calc(100% - 35rem);
            }
            @media (max-width:850px){
                flex-flow:row wrap;
                padding:1.5rem  0;
                width:100%;
            }
            @media (max-width:250px){
                gap:.65rem;
            }
        }
    }
`