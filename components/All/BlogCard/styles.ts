import styled from 'styled-components';
export const BlogCardWrapper = styled.li`
    align-items:center;
    display:flex;
    justify-content:center;
    margin:2rem auto;
    max-width:95%;
    position:relative;
    width:45rem;
    &::before{
        border-radius:1.5rem;
        background-image:linear-gradient(to top left,${({theme}) => theme.colors.primary},${({theme}) => theme.colors.secondary});
        height:101%;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        transition:2s linear background-image;
        width:101.25%;
        z-index:-5;
    }
    & > a {
        background-color:${({theme}) => theme.colors.background};
        border-radius:1.5rem;
        height:100%;
        position:relative;
        padding:.3rem;
        &,
        & > *{
            width:100%;
        }
        &,
        & > figcaption{
            align-items:center;
            display:flex;
            flex-flow:column;
            justify-content:center;
        }
        & > figure{
            aspect-ratio:3/3.1;
            border-radius:1.5rem;
            overflow:hidden;
            position:relative;
        }
        & > figcaption {
            & > * {
                width:100%;
            }
            & > .title{
                & > h3{
                    font-size:3rem;
                    font-weight:500;
                    text-align:center;
                }
            }
            & > .info{
                display:grid;
                grid-template-columns:repeat(2,1fr);
                & > .author{
                    padding:.15rem;
                    & > figure{
                        border-radius:50%;
                        height:7.5rem;
                        overflow:hidden;
                        position:relative;
                        width:7.5rem;
                    }
                    & > figcaption {
                        & > p {
                            font-size:1.55rem;
                            padding:.15rem .25rem;
                        }
                    }
                }
                & > .details{
                    align-items:flex-end;
                    display:flex;
                    flex-flow:column;
                    justify-content:center;
                    padding:.15rem;
                    row-gap:1.5rem;
                    & > .category{
                        & > a{
                            align-items:center;
                            background-color:${({theme}) => theme.colors.primary};
                            border-radius:1.85rem;
                            color:${({theme}) => theme.colors.color};
                            display:flex;
                            font-size:1.5rem;
                            justify-content:center;
                            padding:.35rem .8rem;
                            transition:.2s linear filter,.2s linear transform;
                            &:focus,
                            &:hover{
                                filter:brightness(115%);
                                transform:scaleX(.95);
                            }
                        }
                    }
                    & > .date{
                        & > p {
                            font-weight:700;
                        }
                    }
                }
            }
        }
    }
    &:focus,
    &:hover{
        &::before{
            background-image:linear-gradient(to top left,${({theme}) => theme.colors.primary},${({theme}) => theme.colors.tertiary});
        }
    }
`