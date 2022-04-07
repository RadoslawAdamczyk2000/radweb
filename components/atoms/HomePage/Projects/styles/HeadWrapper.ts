import styled from "styled-components";
export const HeroWrapper = styled.div`
    display:grid;
    grid-template-columns:3fr 2fr;
    padding:3rem .45rem;
    & > article{
        align-items:start;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin:0 auto;
        max-width:95%;
        row-gap:2rem;
        width:60rem;
        & > h2{
            font-size:5rem;
        }
        & > div{
            font-size:1.9rem;
            line-height:3.2rem;
            padding:.5rem;
            text-align:start;
        }
    }
    & > div{
        align-items:center;
        display:flex;
        justify-content:center;
        width:100%;
    }
    @media only screen and (max-width:1200px){
        align-items:start;
        display:flex;   
        flex-direction:column;
        justify-content:center;
        row-gap:2rem;
    }
`