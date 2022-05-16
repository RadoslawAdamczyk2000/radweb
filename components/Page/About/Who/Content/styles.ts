import styled from 'styled-components';
export const ChartWrapper = styled.div`
    aspect-ratio:3/3;
    background-color:#eee;
    border-radius:1.5rem;
    box-shadow:0 0 1rem hsla(0,100%,0%,.25);
    margin:1rem auto;
    max-width:95%;
    width:65rem;
`
export const MoviesSectionWrapper = styled.div`
    display:grid;
    grid-template-columns:2.5fr 1fr;
    padding:0 2rem;
    @media only screen {
        @media (min-width:1450px){
            grid-template-columns:2fr 1.5fr;
        }
        @media (max-width:1000px){
            align-items:center;
            display:flex;
            flex-flow:column;
            justify-content:center;
            row-gap:1rem;
        }
        @media (max-width:300px){
            padding:0 1rem;
        }
    }
    & > * {
        width:100%;
    }
    & > div{
        position:relative;
        & > section{
        }
    }
    & > ul {
        align-items:center;
        display:flex;
        flex-flow:column;
        padding:2rem 0;
        row-gap:.5rem;
        @media only screen {
            @media (max-width:1000px){
                flex-flow:row wrap;
            }
            @media (max-width:300px){
                padding:1rem 0;
            }
        }
    }
`
export const MovieWrapper = styled.li`
    align-items:center;
    aspect-ratio:16/9;
    display:flex;
    justify-content:center;
    width:100%;
    & > iframe{
        all:unset;
        height:100%;
        transition:.2s linear filter;
        width:100%;
    }
`
export const PictureWrapper = styled.figure`
    aspect-ratio:16/9;
    border-radius:2.5rem;
    max-height:50rem;
    overflow:hidden;
    position:relative;
    margin:2rem auto;
    width:95%;
    @media only screen {
        @media (max-width:700px){
            border-radius:1.5rem;
            max-height:auto;
            width:100%;
        }
    }
`
export const TextWrapper = styled.section`
    align-items:flex-start;
    display:flex;
    flex-flow:column;
    justify-content:center;
    padding:2rem 4rem;
    row-gap:1.5rem;
    text-align:start;
    @media only screen {
        @media (max-width:800px){
            padding:2rem 2rem;
        }
        @media (max-width:300px){
            padding:2rem 1rem;
        }
    }
    & > h2{
        color:#333;
        font-size:3.2rem;
        @media only screen {
            @media (min-width:1450px){
                font-size:5.3rem;
            }
        }
    }
    & > p {
        color:#666;
        font-size:1.8rem;
        line-height:calc(1.8rem * 2);
        @media only screen {
            @media (min-width:1450px){
                font-size:2.1rem;
                line-height:calc(2.1rem * 2.2);
            }
            @media (max-width:300px){
                font-size:1.55rem;
                line-height:calc(1.55rem * 2);
            }
        }
    }
`
