import styled from 'styled-components';
export const CodeWrapper = styled.pre`
    background-color:#021301;
    border-radius:.75rem;
    padding:3rem .5rem;
    width:100%;
    & > pre{
        color:#15B10C;
        font-size:1.4rem;
        line-height:2.8rem;
        font-family: 'Inconsolata', monospace;
        white-space: pre-wrap;
        user-select:none;
    }
    
`
export const ContentWrapper = styled.section`
    max-width:95%;
    width:115rem;
    &.excerpt{
        font-size:1.9rem;
        font-weight:500;
        line-height:5rem;
        margin:2rem auto;
        padding:1.5rem;
        text-indent:3rem;
        @media only screen and (max-width:700px){
            font-size:1.8rem;
            line-height:4rem;
        }
        em,
        i{
            font-size:1.8rem;
            font-weight:400;
            opacity:.85;
            @media only screen and (max-width:700px){
                font-size:1.7rem;
            }
        }
    }
    &.regular{
        color:${({theme}) => theme.colors.primary};
        font-size:1.7rem;
        line-height:3.75rem;
        margin:1rem auto;
        padding:.75rem;
        text-indent:1.5rem;
        @media only screen and (max-width:700px){
            font-size:1.5rem;
            line-height:2.7rem;
        }
        a{
            color:${({theme}) => theme.colors.tertiary};
            font-weight:500;
            text-decoration:underline;
            transition:.12s linear filter;
            &:focus,
            &:hover{
                filter:brightness(150%) hue-rotate(150deg);
            }
        }
        b,
        strong{
            color:${({theme}) => theme.colors.color};
        }
        ol,
        ul{
            align-items:flex-start;
            display:flex;
            flex-flow:column;
            justify-content:center;
            row-gap:.5rem;
        }
    }
`
export const ImageWrapper = styled.section`
    & > figure{
        height:100%;
        position:relative;
        width:100%;
    }
    &.main{
        height:50rem;
        margin:4rem auto;
        max-width:98%;
        width:115rem;
    }
    &.regular{
        height:30rem;
        margin:2rem auto;
        max-width:85%;
        width:95rem;
    }

`
export const TitleWrapper = styled.h1`
    max-width:98%;
    word-wrap:break-word;
    &.title{
        color:${({theme}) => theme.colors.tertiary};
        margin:4rem auto;
        font-size:5rem;
        padding:1rem .5rem;
        width:120rem;
        @media only screen and (max-width:700px){
            font-size:3rem;
        }
    }
    &.other{
        color:${({theme}) => theme.colors.color};
        font-size:2.6rem;
        margin:2rem auto;
        padding:1rem .5rem;
        font-weight:500;
        width:100rem;
        @media only screen and (max-width:700px){
            font-size:2.1rem;
        }
    }
`