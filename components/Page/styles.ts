import styled from 'styled-components';
export const ContentMediaWrapper = styled.section`
    align-items:start;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    padding:.5rem 0;
    row-gap:2rem;
    &.secondary{
        background-color:${({theme}) => theme.colors.secondary};
        border-radius:2.5rem;
        padding:2rem 1rem;
    }
    & > .media{
        & > div{
            aspect-ratio:16/9;
            height:30rem;
            @media only screen{
                @media (max-width:1270px){
                    height:25rem;
                }
                @media (max-width:1000px){
                    height:22rem;
                }
                @media (max-width:930px){
                    height:35rem;
                }
                @media (max-width:800px){
                    height:30rem;
                }
                @media (max-width:700px){
                    height:27rem;
                }
                @media (max-width:600px){
                    height:25rem;
                }
                @media (max-width:550px){
                    height:20rem;
                }
                @media (max-width:450px){
                    height:18rem;
                }
                @media (max-width:400px){
                    height:15rem;
                }
                @media (max-width:350px){
                    display:none;
                }
            }
            & > iframe{
                all:unset;
                height:100%;
                width:100%;
            }
        }
        & > figure{
            align-items:center;
            display:flex;
            justify-content:center;
            position:relative;
            height:55rem;
            max-width:85%;
            margin:auto;
            width:40rem;
            @media only screen {
                @media (max-width:950px){
                    height:35rem;
                }
            }
        }
    }
    & > .content{
        padding:1rem .25rem 2rem .25rem;
        width:70rem;
        @media only screen{
            @media (max-width:1500px){
                width:50rem;
            }
            @media (max-width:1120px){
                width:40rem;
            }
            @media (max-width:950px){
                width:40rem;
                & > h2{
                    color:${({theme}) => theme.colors.primary};
                    font-size:1.95rem;
                    padding:.75rem 1.5rem;
                }
                & > p{
                    color:${({theme}) => theme.colors.primary};
                    font-size:1.65rem;
                    line-height:3rem;
                    padding:.5rem;
                }
            }
            @media (max-width:930px){
                width:90%;
            }
        }
        & > *{
            margin:.5rem 0;
        }
        & > h2{
            color:${({theme}) => theme.colors.color};
            font-size:2.95rem;
            padding:1rem 1.5rem;
        }
        & > p{
            color:${({theme}) => theme.colors.primary};
            font-size:1.75rem;
            line-height:3.5rem;
            padding:.75rem;
        }
    }
    a{
        color:${({theme}) => theme.colors.color};
        font-size:2.2rem;
        font-weight:700;
        transition:.12s ease-in-out color,.12s ease-in-out color;
        padding:1rem 2rem;
        position:relative;
        user-select:none;
        &::before{
            background-color:${({theme}) => theme.colors.tertiary};
            background-image:linear-gradient(to left,${({theme}) => theme.colors.tertiary},${({theme}) => theme.colors.color});
            bottom:0;
            left:0;
            height:.35rem;
            transform:skewX(-35deg);
            transition:.15s linear width;
            width:0%;
        }
        &:focus,
        &:hover{    
            color:${({theme}) => theme.colors.tertiary};
            &::before{
                width:100%;
            }
        }
    }
`
export const HeroWrapper = styled.header`
    align-items:center;
    display:flex;
    flex-flow:row wrap-reverse;
    justify-content:space-evenly;
    min-height:55rem;
    padding:2rem 5rem;
    row-gap:.5rem;
    figure{
        position:relative;
    }
    &.home{
        @media only screen {
            @media (max-width:900px){
                padding:2rem 1rem;
            }
            @media (max-width:780px){
                flex-flow:column-reverse;
            }
        }
        & > section{
            max-width:95%;
            width:65rem;
            & > h1{
                color:${({theme}) => theme.colors.color};
                font-size:3.2rem;
                padding:1rem 1.5rem;
            }
            & > p{
                color:${({theme}) => theme.colors.primary};
                font-size:1.7rem;
                line-height:3.3rem;
                padding:.75rem;
            }
            @media only screen{
                @media (max-width:1200px){
                    width:55rem;
                    & > h1{
                        font-size:2.7rem;
                    }
                    & > p{
                        font-size:1.6rem;
                        line-height:2.9rem;
                    }       
                }
                @media (max-width:1100px){
                    width:45rem;
                }
            }
        }
        & > figure{
            height:55rem;
            max-width:85%;
            width:45rem;
            @media only screen{
                @media (max-width:1200px){
                    height:45rem;
                    width:35rem;
                }
                @media (max-width:850px){
                    width:30rem;
                }
            }
        }
    }
    &.page{
        & > div{
            align-items:start;
            display:flex;
            flex-direction:column;
            justify-content:center;
            max-width:95%;
            width:65rem;
            @media only screen {
                @media (max-width:1200px){
                    width:50rem;

                }
            }
            & > section{
                & > h1{
                    color:${({theme}) => theme.colors.color};
                    font-size:3.2rem;
                    padding:1rem 1.5rem;
                }
                & > p{
                    color:${({theme}) => theme.colors.primary};
                    font-size:1.7rem;
                    line-height:3.3rem;
                    padding:.75rem;
                }
                @media only screen {
                    @media (max-width:1200px){
                        & > h1{
                        font-size:2.7rem;
                        }
                        & > p{
                            font-size:1.6rem;
                            line-height:2.9rem;
                        }
                    }
                }
            }
        }
        & > figure{
            height:55rem;
            max-width:85%;
            width:45rem;
            @media only screen {
                @media (max-width:1050px){
                    height:25rem;
                    width:75rem;
                }
            }
        }
    }
`
export const OfferCardHomeWrapper = styled.section`
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:start;
    padding: 0 0 1rem 0;
    max-width:90%;
    min-height:45rem;
    width:40rem;
    & > *:not(a){
        width:100%;
    }
    & > figure{
        height:15rem;
        position:relative;
    }
    & > h3{
        color:${({theme}) => theme.colors.color};
        font-size:2rem;
        padding:.5rem 1rem;
    }
    & > p{
        color:${({theme}) => theme.colors.primary};
        font-size:1.52rem;
        line-height:3rem;
        padding:.5rem;
    }
    & > a{
        color:${({theme}) => theme.colors.color};
        font-size:2.2rem;
        font-weight:700;
        transition:.12s ease-in-out color,.12s ease-in-out color;
        padding:1rem 2rem;
        position:relative;
        user-select:none;
        &::before{
            background-color:${({theme}) => theme.colors.tertiary};
            background-image:linear-gradient(to left,${({theme}) => theme.colors.tertiary},${({theme}) => theme.colors.color});
            bottom:0;
            left:0;
            height:.35rem;
            transform:skewX(-35deg);
            transition:.15s linear width;
            width:0%;
        }
        &:focus,
        &:hover{    
            color:${({theme}) => theme.colors.tertiary};
            &::before{
                width:100%;
            }
        }
    }

`
export const OffersHomeWrapper = styled.section`
    background-color:${({theme}) => theme.colors.secondary};
    border-radius:1.75rem;
    padding:1rem 2rem;
    & > article{
        padding:0 2rem;
    }
    & > div{
        display:grid;
        grid-template-columns:2fr 4fr;
        min-height:50rem;
        & > ul{
            align-items:start;
            display:flex;
            flex-flow:column;
            justify-content:start;
            padding:3rem 2rem;
            row-gap:1.75rem;
            & > li{
                cursor:pointer;
                font-size:1.9rem;
                font-weight:500;
                position:relative;
                user-select:none;
                &::before{
                    background-image:linear-gradient(to right,${({theme}) => theme.colors.color},${({theme}) => theme.colors.primary},${({theme}) => theme.colors.secondary});
                    border-radius:1rem;
                    bottom:-.5rem;
                    left:0;
                    height:.4rem;
                    transition:.25s ease-in-out width;
                    width:0;
                }
                &:focus,
                &:hover{
                    &::before{
                        width:100%;
                    }
                }
            }
        }
        & > div{
            align-items:center;
            display:flex;
            justify-content:center;
        }
    }
`
export const SearchWrapper = styled.div`
    display:flex;
    height:4.75rem;
    width:85%;
    & > input{
        background-color:${({theme}) => theme.colors.secondary};
        border-radius:.65rem;
        color:${({theme}) => theme.colors.color};
        font-size:1.75rem;
        font-weight:500;
        height:100%;
        padding:0 3rem;
        width:100%;
        &::placeholder{
            color:${({theme}) => theme.colors.primary};
            font-size:2rem;
            font-weight:700;
            padding:0 2rem;
        }
    }
`