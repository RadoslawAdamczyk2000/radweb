import styled from 'styled-components';
export const CodeWrapper = styled.pre`
    background-color:#021301;
    border-radius:.75rem;
    padding:3rem 0;
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
        em,
        i{
            font-size:1.8rem;
            font-weight:400;
            opacity:.85;
        }
    }
    &.regular{
        color:${({theme}) => theme.colors.primary};
        font-size:1.7rem;
        line-height:3.75rem;
        margin:1rem auto;
        padding:.75rem;
        text-indent:1.5rem;
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
export const TitleWrapper = styled.h1`
    max-width:98%;
    word-wrap:break-word;
    &.title{
        color:${({theme}) => theme.colors.tertiary};
        margin:4rem auto;
        font-size:5rem;
        padding:1rem .5rem;
        width:120rem;
    }
    &.other{
        color:${({theme}) => theme.colors.color};
        font-size:2.6rem;
        margin:2rem auto;
        padding:1rem .5rem;
        font-weight:500;
        width:100rem;
    }
`