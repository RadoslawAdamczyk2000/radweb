import styled from 'styled-components';
export const MenuItemExpand =  styled.div`
    align-items:center;
    background:black;
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    & > a{
        background:green;
    }
    & > div{
        align-items:center;
        background:gray;
        display:flex;
        font-size:2.5rem;
        height:3.45rem;
        justify-content:center;
        width:3.45rem;
    }
`