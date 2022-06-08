import styled from 'styled-components';
export const CreditsWrapper = styled.div`
    gap:.85rem;
    padding:0 .85rem;
    &,
    & > ul{
        align-items:center;
        display:flex;
        flex-flow:row wrap;
        justify-content:flex-start;
    }
    & > ul {
        gap:.25rem;
        & > span{
            background-color:${({theme}) => theme.colors.background};
            border-radius:50%;
            height:.45rem;
            opacity:.6;
            width:.45rem;
        }
    }
`