import styled from 'styled-components';
export const HeroWrapper = styled.header`
    display:grid;
    grid-template-columns:3.3fr 3fr;
    padding:1rem 2rem;
    @media only screen {
        @media (min-width:1400px){
            padding:1rem 2rem 1rem 0rem;
        }
        @media (max-width:750px){
            align-items:center;
            display:flex;
            flex-flow:column;
            row-gap:1rem;
        }
    }
    & > figure{
        aspect-ratio:4/3;
        margin:auto;
        position:relative;
        width:100%;
    }
    & > div{
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;
        padding:2rem 4rem 2rem 1rem;
        row-gap:1rem;
        text-align:end;
        @media only screen {
            @media (max-width:950px){
                padding:2rem 1rem;
            }
            @media (max-width:800px){
                padding:.5rem 1rem;
            }
            @media (max-width:750px){
                text-align:center;
            }
        }
        & > * {
            width:100%;
        }
        & > h1{
            font-size:4rem;
            @media only screen {
                @media (max-width:1100px){
                    font-size:3.4rem;
                }
                @media (max-width:800px){
                    font-size:3rem;
                }
                @media (max-width:750px){
                    font-size:4rem;
                }
                @media (max-width:500px){
                    font-size:3rem;
                }
            }
        }
        & > p {
            font-size:1.9rem;
            line-height:calc(1.9rem * 2);
            @media only screen {
                @media (max-width:1100px){
                    font-size:1.8rem;
                    line-height:calc(1.8rem * 2);
                }
                @media (max-width:950px){
                    font-size:1.65rem;
                    line-height:calc(1.65rem * 2);
                }
                @media (max-width:800px){
                    font-size:1.6rem;
                    line-height:calc(1.6rem * 1.85);
                }
                @media (max-width:750px){
                    font-size:1.8rem;
                    line-height:calc(1.8rem * 2);
                }
            }
        }
    }
`
export const MenuWrapper = styled.div`
    /* background-color:gold; */
    padding:5rem 6rem;
    &,
    & > ul,
    & > ul > li,
    & > ul > li > a{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > ul{
        flex-flow:row wrap;
        gap:2rem;
        & > li{
            & > a{
                font-size:2.5rem;
                overflow:hidden;
                padding:1rem 1.5rem;
                position:relative;
                text-align:center;
                transition:.15s linear color;
                z-index:0;
                @media only screen {
                    @media (max-width:950px){
                        font-size:2rem;
                    }
                }
                &::before{
                    background:aqua;
                    border-radius:5rem;
                    bottom:0;
                    height:.5rem;
                    left:-100%;
                    transition:.15s linear transform;
                    width:100%;
                    z-index:-1;
                }
                &:focus,
                &:hover{
                    color:aqua;
                    &::before{
                        transform:translateX(100%);
                    }
                }
            }
        }
    }   
`