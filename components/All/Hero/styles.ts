import styled, { css } from 'styled-components';
interface vertical {
    vertical?:boolean;
}
const Hero = styled.header<vertical>`
    display:grid;
    grid-template-columns:2.5fr 2fr;
    @media only screen {
        @media (max-width:600px){
            grid-template-columns:1fr;
        }
    }
    & > * {
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        position:relative;
    }
    .content{
        align-items:start;
        display:flex;
        flex-flow:column;
        justify-content:center;
        width:85%;
        @media only screen {
            @media (max-width:1000px){
                width:98%;
            }
        }
        & > * {
            padding:.65rem;
            width:100%;
        }
        & > h1{
            color:${({theme}) => theme.colors.headings.title};
            font-size:3.65rem;
            font-weight:600;
            @media only screen {
                @media (min-width:1450px){
                    font-size:4.5rem;
                }
                @media (max-width:650px){
                    font-size:2.85rem;
                }
            }
        }
        & > p {
            color:${({theme}) => theme.colors.headings.subtitle};
            font-size:1.8rem;
            font-weight:600;
            line-height:calc(1.8rem * 2);
            text-align:end;
            @media only screen {
                @media (min-width:1450px){
                    font-size:1.95rem;
                    line-height:calc(1.95rem * 2);
                }
            }
        }
    }
    .image{
        & > figure{
            aspect-ratio:4/3;
            position:relative;
        }
    }
`
export const HeroImageWrapper = styled(Hero)`
    ${({vertical}) => vertical ? css`
        display:flex;
        flex-flow:column;
        justify-content:center;  
        padding:1rem 0;
        row-gap:2rem;
        .content{
            max-width:95%;
            margin:auto;
            text-align:start !important;
            width:95rem;
        }
        .image{
            & > figure{
                max-height:55rem;
                max-width:85%;
                width:85rem;
            }
        }      
    ` : css`
        .content{
            padding:2rem 1rem;
            @media only screen {
                @media (max-width:730px){
                    padding:1rem .5rem;
                }
                @media (max-width:600px){
                    padding:1rem 0;
                }
            }    
        }
        .image{
            padding:2rem 1rem;
            @media only screen {
                @media (max-width:730px){
                    padding:1rem .5rem;
                }
                @media (max-width:600px){
                    display:none;
                }
            }
            & > figure{
                margin:auto;
                position:relative;
                width:95%;
                @media only screen {
                    @media (max-width:1250px){
                        height:100%;
                    }
                }
            }
        }
    `}
`
export const HeroSearchWrapper = styled(Hero)`
    & > div{
        &:first-of-type{
            padding:2rem 1rem;
            row-gap:.5rem;
            @media only screen {
                @media (max-width:730px){
                    padding:1rem .5rem;
                }
                @media (max-width:600px){
                    padding:1rem 0;
                }
            }
        }
    }
    .image{
        padding:2rem 1rem;
        @media only screen {
            @media (max-width:730px){
                padding:1rem .5rem;
            }
            @media (max-width:600px){
                display:none;
            }
        }
        & > figure{
            margin:auto;
            width:95%;
            @media only screen {
                @media (max-width:1250px){
                    height:100%;
                }
            }
        }
    }
`