import styled from 'styled-components';
export const MenuItemWrapper = styled.li`
    /* background:blue; */
    & > a{
        /* background:purple; */
        color:${({theme}) => theme.colors.background};
        font-size:1.65rem;
        position:relative;
        transition:.2s linear color;
        &::before{
            background-color:${({theme}) => theme.colors.secondary};
            border-radius:3rem;
            bottom:0;
            left:0;
            height:.35rem;
            transition:.2s linear width;
            width:0%;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.secondary};
            &::before{
                width:100%;
            }
        }
    }
`