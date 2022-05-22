import styled from 'styled-components';
export const CardWrapper = styled.li`
    max-width:95%;
    width:40rem;
    &,
    & > div{
        align-items:center;
        display:flex;
        flex-flow:column;
        justify-content:center;    
    }
    & > * {
        width:100%;
    }
    & > figure{
        aspect-ratio:20/9;
        max-height:45rem;
        position:relative;
    }
    & > div {
        & > * {
            text-align:center;
            width:100%;
        }
        & > h3{
            font-size:2.2rem;
            padding:.25rem .5rem;
        }
        & > a{
            color:red;
            font-size:1.8rem;
            padding:.25rem .5rem;
            transition:.12s linear filter;
            &:focus,
            &:hover{
                filter:hue-rotate(250deg);
            }
        }
        & > p {
            font-size:1.9rem;
            line-height:calc(2 * 1.9rem);
            padding:.25rem .85rem;
        }
    }

`
export const CardsWrapper = styled.ul`
    align-items:start;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    gap:1rem;
    width:100%;
`