import styled from 'styled-components';
export const Wrapper = styled.div`
    grid-column:3;
    &,
    & > ul{
        align-items:center;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
    }
    & > ul{
        gap:1.2rem;
    }
`