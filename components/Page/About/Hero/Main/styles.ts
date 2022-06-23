import styled from 'styled-components';
export const Wrapper = styled.header`
    justify-content:flex-start;
    position:relative;
    min-height:65rem;
    padding:1rem 0;
    row-gap:1rem;
    &,
    & > section{
        flex-flow:column;
    }
    &,
    & > section,
    & > section > ul,
    & > section > ul > li{
        align-items:center;
        display:flex;
    }

    & > figure{
        aspect-ratio:1/1;
        position:relative;
        max-width:95%;
        width:45rem;
    }
    & > section{
        width:100%;
        justify-content:center;
        & > h1,
        & > h2{
            color:${({theme}) => theme.colors.primary};
            font-size:4rem;
            line-height:2;
            padding:0 1rem;
            text-align:center;
            word-break:break-all;
            word-wrap:break-word;
        }
        & > ul{
            flex-flow:row wrap;
            gap:.85rem;
            padding:.75rem .85rem;
            & > li{
                font-weight:800;
                justify-content:center;
                padding:.45rem .85rem;
            }
            & > span{
                &:last-of-type{
                    display:none;
                }
                background-color:${({theme}) => theme.colors.color};
                height:1.2rem;
                opacity:.5;
                width:1.2rem;
            }
        }
    }
`