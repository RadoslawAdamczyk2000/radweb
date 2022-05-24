import styled from 'styled-components';
export const CodeWrapper = styled.pre`
    background-color:${({theme}) => theme.colors.headings.subtitle};
    border-radius:1rem;
    margin:1rem auto;
    max-width:95%;
    padding:2rem 1.5rem;
    width:85rem;
    &::selection{
        background-color:lime !important;
        color:black !important;
    }
    & > pre{
        color:lime;
        white-space:pre-wrap;
        word-break:break-all;
        word-wrap:break-word;
        width:100%;
        &::selection{
            background-color:lime !important;
            color:black !important;
        }
    }
`
export const ContentWrapper = styled.section`
    margin:1rem auto;
    max-width:95%;
    width:85rem;
    h2{
        font-size:2.7rem;
        padding:.85rem;
    }
    p{
        color:${({theme}) => theme.colors.color};
        font-size:1.9rem;
        line-height:calc(1.9rem * 2);
        padding:.75rem;
        text-align:justify;
        b,
        strong{
            color:${({theme}) => theme.colors.secondary};
        }
    }
    a{
        color:red;
        font-weight:600;
        text-decoration:underline;
        transition:.2s linear color;
        &:hover{
            color:fuchsia;
        }
    }
    ul{
        margin:.45rem 0;
        li{
            font-size:1.8rem;
            line-height:calc(1.75rem * 2);
            list-style:outside square;
            margin:.75rem 0 .75rem 2rem;
        }
    }
`
export const Figure = styled.figure`
    align-items:center;
    display:flex;
    justify-content:center;
    margin:1rem auto;
    position:relative;
    max-width:95%;
    width:95rem;
`
export const FooterWrapper = styled.div`
    margin:1rem auto;
    max-width:100%;
    padding:1rem .85rem;
    width:115rem;
    & > h3{
        font-size:3.5rem;
        text-align:center;
        margin:1rem auto;
        width:100%;
        @media only screen{
            @media (max-width:550px){
                font-size:2.5rem;
            }
        }
    }
    & > ul{
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
        gap: 0.75rem;
        & > li {
            background:white;
            box-shadow:0 0 1.5rem hsla(0,100%,0%,.15);
            border-radius:1.5rem;
            max-width:98%;
            padding:2rem .5rem;
            transition:.2s linear box-shadow, .2s linear color, .2s linear transform;
            width:35rem;
            & > a{
                align-items:center;
                display:flex;
                font-size:1.8rem;
                font-weight:800;
                height:100%;
                justify-content:center;
                text-align:center;
                width:100%;
            }
            &:focus,
            &:hover{
                box-shadow:0 0 1.5rem ${({theme}) => theme.colors.tertiary};
                color:${({theme}) => theme.colors.secondary};
                transform:scale(1.05);
            }
        }
    }
`
export const HeroWrapper = styled.header`
    align-items: center;
    display:flex;
    flex-flow:column;
    justify-content:center;
    margin:0 auto;
    max-width:99%;
    row-gap:1rem;
    padding:2rem 0;
    width:95rem;
    & > * {
        width:100%;
    }
    .return{
        justify-content:flex-end;
        &,
        & > a,
        & > a > *{
            align-items:center;
            display:flex;
            flex-flow:row nowrap;
        }
        & > a{
            justify-content:center;
            & > span{
                font-size:3rem;
                height:3.5rem;
                justify-content:center;
                transition:.2s linear color,.2s linear transform;
                width:3.5rem;
            }
            & > p{
                height:3.5rem;
                font-size:2.5rem;
                font-weight:700;
                justify-content:center;
                padding:0 1rem;
                position:relative;
                transition:.2s linear color;
                &::before{
                    background:${({theme}) => theme.colors.secondary};
                    bottom:0;
                    height:.5rem;
                    right:0;
                    transition:.2s linear width;
                    width:0%;
                }
            }
            &:focus,
            &:hover{
                & > * {
                    color:${({theme}) => theme.colors.secondary};
                }
                & > span{
                    transform:scale(1.15);
                }
                & > p{
                    &::before{
                        width:100%;
                    }
                }
            }
        }
    }
    .content{
        & > h1{
            font-size:4.2rem;
            font-weight:700;
            text-align:start;
            @media only screen {
                @media (max-width:650px){
                    font-size:3.8rem;
                    text-align:center;
                }
                @media (max-width:450px){
                    font-size:3.3rem;
                }
                @media (max-width:200px){
                    font-size:2.9rem;
                }
            }
        }
        & > ul{
            align-items:center;
            display:flex;
            flex-flow:row wrap;
            justify-content:center;
            gap:1.5rem;
            padding:1.5rem 1.2rem;
            & > li{
                align-items:center;
                color:#aaa;
                display:flex;
                font-size:3rem;
                height:3.5rem;
                justify-content:center;
                width:3.5rem;
                @media only screen{
                    @media (max-width:200px){
                        font-size:2rem;
                    }
                }
            }
        }
        & > p:first-of-type{
            font-size:2.2rem;
            text-align:end;
        }
        & > p:last-of-type{
            font-size:2.1rem;
            font-weight:500;
            line-height:calc(2.2rem * 2);
            text-align:justify;
            text-indent:2rem;
            b,
            strong{
                color:${({theme}) => theme.colors.secondary};
            }
            @media only screen {
                @media (max-width:650px){
                    padding:0 1.85rem;
                }
                @media (max-width:200px){
                    font-size:1.9rem;
                    padding:0 1.15rem;
                    text-align:start;
                    text-indent:1.2rem;
                }
            }
            a{
                color:red;
                text-decoration:underline;
                transition:.2s linear color;
                &:hover{
                    color:fuchsia;
                }
            }
        }
    }
    .image{
        aspect-ratio:16/9;
        max-height:45rem;
        position:relative;
        width:100%;
        @media only screen{
            @media (max-width:200px){
                aspect-ratio:4/9;
            }
        }
    }
`
export const MovieWrapper = styled(Figure)`
    aspect-ratio:27/15;
    iframe{
        all:unset;
        height:100%;
        width:100%;
    }
`
export const PictureWrapper = styled(Figure)`
    aspect-ratio:16/9;
`