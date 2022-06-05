import styled from 'styled-components';
export const MovieWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    height:99vh;
    position:relative;
    z-index:0;
    @media only screen{
        @media (max-width:900px){
            height:93vh;
        }
    }
    & > video{
        display:flex;
        height:100%;
        object-fit:cover;
        object-position:center;
        position:relative;
        width:100%;
        z-index:-1;
    }
    & > .grid {
        display:grid;
        grid-template-columns:repeat(2,1fr);
        height:100%;
        padding:0 0 15rem 0;
        position:absolute;
        width:100%;
        @media only screen{
            @media (max-width:900px){
                align-items:center;
                display:flex;
                justify-content:center;
                padding:0 ;
            }
            @media (max-width:930px) and (orientation:landscape){
                align-items:center;
                display:flex;
                justify-content:center;
                padding:0 ;
            }
        }
        & > .content{
            align-items:flex-end;
            display:flex;
            grid-column:2;
            justify-content:center;
            width:100%;
            @media only screen{
                @media (max-width:530px){
                    align-items:center;
                    height:100%;
                    width:calc(100% - 11.25rem);
                }
                @media (max-width:370px){
                    width:calc(100% - ((3.5rem + .35rem) * 2 ));
                }
            }   
            & > section{
                align-items:flex-end;
                display:flex;
                flex-direction:column;
                justify-content:center;
                padding:0 10.5rem;
                text-align:end;
                row-gap:1rem;
                width:100%;
                @media only screen{
                        @media (max-width:530px){
                            align-items:center;
                            padding:0 .15rem;
                        }
                    } 
                & > h1{
                    cursor:default;
                    color:#fff;
                    font-family:${({theme}) => theme.fonts.family.heading};
                    font-size:4.5rem;
                    text-shadow:0 0 2rem hsla(0,100%,0%,.5);
                    user-select:none;
                    width:100%;
                    @media only screen{
                        @media (max-width:900px){
                            font-size:4rem;
                        }
                        @media (max-width:530px){
                            letter-spacing:.20rem;
                            text-align:center;
                        }
                        @media (max-width:450px){
                            font-size:3rem;
                        }
                        @media (max-width:370px){
                            font-size:2.55rem;
                        }
                        @media (max-width:290px){
                            letter-spacing:.15rem;
                            font-size:2rem;
                        }
                    }
                }
                & > div{
                    padding:1rem 1rem;
                    @media only screen{
                        @media (max-width:290px){
                            padding:1rem .35rem;
                        }
                    }
                    & > a {
                        background-color:#fff;
                        border-radius:4rem;
                        box-shadow:0 0 1rem hsla(0,100%,0%,.5);
                        color:#000;
                        display:flex;
                        font-size:2.2rem;
                        font-weight:700;
                        padding:1rem 2rem;
                        transition:.15s linear transform;
                        &:focus,
                        &:hover{
                            transform:scaleX(.95);
                        }
                        @media only screen{
                            @media (max-width:900px){
                                font-size:2rem;
                                font-weight:600;
                                padding:.85rem 1.85rem;
                            }
                            @media (max-width:370px){
                                font-size:1.8rem;
                                padding:.55rem 1.45rem;
                            }
                            @media (max-width:290px){
                                font-size:1.55rem;
                                padding:.55rem .95rem;
                            }
                        }
                    }
                }
                @media only screen {
                    @media (min-width:1450px){
                        padding:0 15rem;
                        & > h1{
                            font-size:7.5rem;
                        }
                    }
                }
            }
        }
    }
`