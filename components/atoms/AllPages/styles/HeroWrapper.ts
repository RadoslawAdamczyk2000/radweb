import styled from 'styled-components';
export const HeroWrapper = styled.header`
    margin:auto;
    max-width:85%;
    min-height:85rem;
    row-gap:2rem;
    width:115rem;
    &,
    & > div{
        align-items:start;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    & > div{
        row-gap:2.1rem;
        & > h1{
            align-items:center;
            color:${({theme}) => theme.colors.tertiary};
            display:flex;
            font-size:3.7rem;
            justify-content:start;
            padding:2rem 3rem;
            width:100%;
        }
        & > small{
            font-size:1.55rem;
            font-weight:600;
            padding:.5rem 1rem;
            sup{
                text-decoration:underline;
            }
        }
        & > ul{
            align-items:center;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-evenly;
            width:100%;
            & > .stack {
                align-items:center;
                color:${({theme}) => theme.colors.primary};
                display:flex;
                font-size:3rem;
                height:4rem;
                justify-content:center;
                width:4rem;
            }
            & > .tags{
                border-radius:4rem;
                box-shadow:inset 0 0 .25rem ${({theme}) => theme.colors.primary};
                color:${({theme}) => theme.colors.primary};
                font-size:1.65rem;
                font-weight:700;
                padding:1rem 1.15rem;
            }
        }
        & > p{
            font-size:2rem;
            font-weight:500;
            line-height:5rem;
            padding:2rem;
            b,
            strong{
                color:#dd0022;
            }
            i{
                opacity:.5;
            }
        }
    }
`