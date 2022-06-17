import styled from 'styled-components';
export const SubmenuWrapper = styled.li`
    position:relative;
    @media only screen {
        @media (max-width:680px){
            width:100%;
        }
    }
    & > ul{
        align-items:start;
        background-color:${({theme}) => theme.colors.primary};
        border-radius:0 .85rem .85rem .85rem;
        display:flex;
        flex-flow:column;
        padding:.85rem;
        position:absolute;
        row-gap:.55rem;
        width:18rem;
        @media only screen {
            @media (min-width:1450px){
                border-radius:0 .95rem .95rem .95rem;
                padding:.65rem .15rem .65rem 1.2rem;
                width:24rem;
            }
            @media (max-width:680px){
                padding:.65rem 1.25rem;
                position:relative;
                width:95%;
            }
        }
    }
`