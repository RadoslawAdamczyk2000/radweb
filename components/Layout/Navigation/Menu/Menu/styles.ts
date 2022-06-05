import styled from 'styled-components';
export const MenuWrapper = styled.menu`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    justify-content:flex-end;
    gap:0 .85rem;
    padding:0 1rem;
    transition:.15s linear color,.15s linear height;
    @media only screen {
        @media (max-width:900px){
            align-items:start;
            gap:0 .35rem;
            padding:0 .25rem;
        }
        @media (max-width:650px) and (orientation:portrait){
            flex-flow:column;
            max-height:80vh;
            overflow-y:scroll;
            padding:0 .5rem;
        }
        @media (max-width:625px) and (orientation:landscape){
            justify-content:start;
            gap:0;
            flex-flow:column;
            max-height:75vh wrap;
            overflow-y:scroll;
            padding:0 .5rem;
        }
    }
`