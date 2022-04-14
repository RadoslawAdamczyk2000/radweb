import styled from 'styled-components';
export const HeroWrapper = styled.header`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:2rem;
    justify-content:center;
    min-height:60rem;
    padding:2rem 0;
    &.about,
    &.home,
    &.page,
    &.search{
        flex-wrap:wrap-reverse;
        justify-content:space-evenly;
        & > article{
            align-items:start;
            display:flex;
            flex-direction:column;
            justify-content:center;
            margin:auto;
            max-width:85%;
            width:65rem;
            & > * {
                margin:1rem 0;
                padding:.75rem;
            }
            & > h1{
                font-size:3rem;
                line-height:5rem;
            }
            & > p{
                color:${({theme}) => theme.colors.primary};
                font-size:1.9rem;
                font-weight:400;
                line-height:3.3rem;
                a{
                    color:${({theme}) => theme.colors.tertiary};
                    transition:.2s linear filter;
                    &:focus,
                    &:hover{
                        filter:brightness(120%);
                    }
                }
                b,
                strong{
                    filter:brightness(150%);
                    font-weight:600;
                }
            }
        }
        & > figure{
            position:relative;
            height:60rem;
            margin:auto;
            width:50rem;
            @media only screen and (max-width:1083px){
                aspect-ratio:16/9;
                position:relative;
                height:50rem;
                max-width:95%;
                width:auto;               
            }
        }
    }
    &.about{

    }
    &.page{
        flex-direction:column;
        & > article{
            align-items:start;
            display:flex;
            flex-direction:column;
            justify-content:center;
            margin:auto;
            max-width:85%;
            width:90rem;
        }
        & > figure{
            aspect-ratio:16/9;
            position:relative;
            height:50rem;
            max-width:95%;
            width:auto;
        }
    }

`