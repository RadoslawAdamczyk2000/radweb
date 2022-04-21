import styled from 'styled-components';
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