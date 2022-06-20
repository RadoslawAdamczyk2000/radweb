import styled from 'styled-components';
export const Wrapper = styled.footer`
    align-items:center;
    background:lime;
    display:flex;
    flex-flow:column;
    justify-content:center;
    row-gap:2rem;
    & > * {
        width:100%;
    }
    & > .micro{
        display:grid;
        grid-template-columns:4fr 2fr 3fr;
    }
`