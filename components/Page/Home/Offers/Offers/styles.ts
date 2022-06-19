import styled from 'styled-components';
export const OffersWrapper = styled.div`
    display:grid;
    grid-template-columns:4fr 1fr 3.5fr;
    margin:2rem auto;
    width:95%;
    & > div{
        grid-column:1;
        padding:.45rem .65rem;
        position:relative;
    }
    & > ul{
        align-items:flex-end;
        display:flex;
        flex-flow:column;
        grid-column:3;
        justify-content:flex-start;
        row-gap:.85rem;
        padding:.25rem .35rem;
    }
    @media only screen{
        @media (max-width:800px){
            grid-template-columns:3fr 3.5fr;
            & > ul{
                grid-column:2;
            }
        }
        @media (max-width:490px){
            align-items:center;
            display:flex;
            flex-flow:column;
            justify-content:center;
            row-wrap:3rem;
            & > * {
                width:100%;
                margin:1.5rem auto;
            }
        }
    }
`