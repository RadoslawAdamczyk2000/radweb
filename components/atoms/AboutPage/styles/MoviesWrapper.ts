import styled from 'styled-components';
export const MoviesWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:2rem;
    justify-content:center;
    margin:2rem 0;
    & > iframe{
        aspect-ratio:16/9;
        border:none;
        height:20rem;
        outline:none;
    }
`