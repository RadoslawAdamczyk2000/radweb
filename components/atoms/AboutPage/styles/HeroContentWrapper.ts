import styled from 'styled-components';
export const HeroContentWrapper = styled.div`
    align-items:start;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:auto;
    max-width:70%;
    row-gap:1rem;
    width:65rem;
    & > .content{
        & > * {
            width:100%;
            margin:auto;
            padding:.75rem 1rem;
        }
        & > h1{
            font-size:3.75rem;
            line-height:6rem;
            width:100%;
            @media only screen and (max-width:950px){
                font-size:2.75rem;
                line-height:4rem;
            }
        }
        & > p{
            font-size:2.1rem;
            line-height:4rem;
            @media only screen and (max-width:950px){
                font-size:1.75rem;
                line-height:3rem;
            }
        }
    }
    & > .buttons{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:2rem;
        justify-content:flex-start;
        padding:2rem 4rem;
        width:100%;
        @media only screen and (max-width:1200px){
            justify-content:center;
        }
    }
    @media only screen and (max-width:1200px){
        align-items:center;
    }

`