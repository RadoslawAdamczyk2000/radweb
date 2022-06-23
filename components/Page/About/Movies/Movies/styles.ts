import styled from 'styled-components';
export const MoviesWrapper = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:column;
    grid-column:6/-1;
    justify-content:flex-start;
    &,
    & > * {
        width:100%;
    }
    @media only screen {
        @media (max-width:930px){
            flex-flow:row wrap;
            justify-content:center;
            gap:1rem;
            order:3;
            & > * {
                max-width:99%;
                width:35rem;
            }
        }
    }
`