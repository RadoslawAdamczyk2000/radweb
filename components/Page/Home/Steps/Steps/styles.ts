import styled from 'styled-components';
export const StepsWrapper = styled.div`
    margin:5rem 0;

    & > ul{
        display:grid;
        grid-gap:.5rem .75rem;
        grid-template-columns:repeat(2,1fr);
        padding:2rem 3rem;
        @media only screen{
            @media (max-width:540px){
                grid-template-columns:repeat(1,1fr);
            }
        }
    }
`