import styled from 'styled-components';
export const SubmenuWrapper = styled.li`
    position:relative;
    & > ul{
        align-items:start;
        background-color:${({theme}) => theme.colors.primary};
        border-radius:0 .75rem .75rem .75rem;
        color:black;
        display:flex;
        flex-flow:column;
        justify-content:center;
        min-width:15rem;
        padding:.65rem .75rem;
        position:absolute;
        row-gap:.5rem;
    }

`