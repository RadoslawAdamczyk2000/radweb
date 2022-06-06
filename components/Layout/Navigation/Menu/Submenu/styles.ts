import styled from 'styled-components';
export const SubmenuWrapper = styled.li`
    position:relative;
    @media only screen {
        @media (max-width:900px){
            min-width:99%;
            width:99%;
        }
    }
    & > ul{
        align-items:start;
        background-color:${({theme}) => theme.colors.secondary};
        border-radius:0 .75rem .75rem .75rem;
        color:black;
        display:flex;
        flex-flow:column;
        justify-content:center;
        min-width:15rem;
        padding:.65rem .75rem;
        position:absolute;
        row-gap:.5rem;
        @media only screen {
            @media (max-width:900px){
                align-items:center;
                border-radius:.75rem;
                position:relative;
                max-width:99%;
                min-width:99%;
                width:99%;
            }
        }
    }

`