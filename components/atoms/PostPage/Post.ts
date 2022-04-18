import styled from 'styled-components';
export const Title = styled.h1`
    color:${({theme}) => theme.colors.tertiary};    font-size:3.75rem;
    line-height:5.5rem;
    margin:3rem auto;
    max-width:90%;
    padding:1.5rem;
    width:135rem;
`
export const Excerpt = styled.article`
    font-size:2.45rem;
    line-height:5rem;
    margin:2rem auto;
    max-width:90%;
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
        max-width:90%;
    }
    &.section{
        aspect-ratio:9/3;
        height:35rem;
        max-width:90%;
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
export const H3 = styled.h3`
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
    line-height:4rem;
    text-align:justify;
    width:75%;
    ul,
    li{
        list-style:square;
    }
    li{
        margin:1.5rem auto 1.5rem 3rem;
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

export const DateWrapper = styled.small`
    color:${({theme}) => theme.colors.color};
    display:flex;
    font-size:1.55rem;
    font-weight:800;
    margin:2rem auto;
    max-width:90%;
    padding:1rem 0 1rem 2rem;
    text-align:start;
    width:135rem;
`
export const Ul = styled.ul`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;
    gap:1rem;
    margin:2rem auto;
    width:75%;
    li{
        color:${({theme}) => theme.colors.tertiary};
        filter: hue-rotate(74deg);
    }
`

export const TagsWrapper = styled(Ul)`
    li{
        font-size:1.9rem;
        font-weight:600;
        padding:1rem 1.5rem;
    }
`

export const StackWrapper = styled(Ul)`
    li{
        align-items:center;
        display:flex;
        justify-content:center;
        font-size:3rem;
        height:3.75rem;
        width:3.75rem;
    }
`