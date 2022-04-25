import styled from 'styled-components';
export const CardWrapper = styled.article`
    max-width:85%;
    width:45rem;
    & > * {
        padding:1rem 2rem;
        transition:.2s linear background-color, .2s linear color;
    }
    & > h4{
        color:${({theme}) => theme.colors.color};
        font-size:2.4rem;
        text-align:start;
    }
    & > ul{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:1rem;
        & > li{
            background-color:${({theme}) => theme.colors.color};
            color:${({theme}) => theme.colors.background};
            border-radius:2rem;
            font-size:1.55rem;
            padding:.5rem 1.5rem;
        }
    }
    & > p{
        color:${({theme}) => theme.colors.primary};
        font-size:1.65rem;
        line-height:2.8rem;
        text-align:start;
    }
    &:focus,
    &:hover{
        & > h4{color:${({theme}) => theme.colors.tertiary};}
        & > p{color:${({theme}) => theme.colors.color};}
    }
`