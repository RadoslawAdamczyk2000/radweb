import styled from 'styled-components';
export const ContentWrapper = styled.section`
    align-items:center;
    display:flex;
    flex-flow:column;
    padding:.25rem 0;
    position:sticky;
    margin:0 auto;
    row-gap:.45rem;
    top:10rem;
    width:85%;
    & > * {
        width:100%;
    }
    & > h2{
        font-size:4rem;
        font-weight:500;
    }
    & > p{
        font-size:1.7rem;
        line-height:calc(1.7rem * 1.8);
        padding:.85rem;
    }
`