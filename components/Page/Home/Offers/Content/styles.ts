import styled from 'styled-components';
export const ContentWrapper = styled.section`
    align-items:center;
    background:pink;
    display:flex;
    flex-flow:column;
    padding:.25rem 0;
    position:sticky;
    row-gap:.45rem;
    top:10rem;
    & > * {
        width:100%;
    }
    & > h2{
        background:black;
        font-size:4rem;
        font-weight:500;
    }
    & > p{
        background:gray;
        font-size:1.7rem;
        line-height:calc(1.7rem * 1.8);
        padding:.85rem;
    }
`