import styled from 'styled-components';
export const SubmenuWrapper = styled.li`
    position:relative;
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
    }
`