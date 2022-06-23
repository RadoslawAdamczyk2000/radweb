import styled from 'styled-components';
export const MoviesWrapper = styled.ul`
    align-items:center;
    display:flex;
    height:100%;
    justify-content:space-between;
    flex-flow:column;
    grid-column:6/-1;
    &,
    & > * {
        width:100%;
    }
`