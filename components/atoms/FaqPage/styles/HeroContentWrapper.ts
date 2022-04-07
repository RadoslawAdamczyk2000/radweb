import styled from 'styled-components';
export const HeroContentWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    flex-direction:column;
    max-width:75%;
    row-gap:2rem;
    width:65rem;
    & > *{
        text-align:start;
        padding:.45rem .75rem;
        width:100%;
    }
    & > h1{
        font-size:4rem;
    }
    & > p{
        font-size:2.2rem;
        line-height:3.2rem;
    }
`