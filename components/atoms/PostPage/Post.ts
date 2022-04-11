import styled from 'styled-components';
export const Title = styled.h1`
    color:${({theme}) => theme.colors.tertiary};    font-size:3.75rem;
    line-height:5.5rem;
    margin:3rem auto;
    max-width:95%;
    padding:1.5rem;
    width:135rem;
`
export const Excerpt = styled.article`
    font-size:2.45rem;
    line-height:5rem;
    margin:2rem auto;
    max-width:95%;
    padding:1rem;
    width:135rem;
`
export const ImgWrapper = styled.figure`
    align-items:center;
    display:flex;
    justify-content:center;
    position:relative;
    margin:auto;
    &.main{
        aspect-ratio:16/7;
        height:65rem;
        max-width:95%;
    }
`
export const H2 = styled.h2`
    color:${({theme}) => theme.colors.color};
    font-size:3.2rem;
    font-weight:700;
    margin:2rem auto;
    text-align:start;
    width:75%;
`
export const H3 = styled.h2`
    color:${({theme}) => theme.colors.color};
    font-size:3.2rem;
    font-weight:700;
    margin:2rem auto;
    text-align:start;
    width:75%;
`

export const Content = styled.p`
    color:${({theme}) => theme.colors.primary};
    font-size:1.775rem;
    margin:1.5rem auto;
    text-align:start;
    width:75%;
    p{
        line-height:3rem;
    }
    ul,
    li{
        list-style:square;
    }
    b,
    strong{
        font-weight:600;
    }
    i{
        font-style:italic;
    }
    a{
        color:${({theme}) => theme.colors.tertiary};
        text-decoration:underline;
    }
`
