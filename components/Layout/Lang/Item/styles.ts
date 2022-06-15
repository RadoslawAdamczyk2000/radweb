import styled from 'styled-components';
export const ItemWrapper = styled.li`
    & > a {
        align-items:center;
        color:${({theme}) => theme.colors.background};
        display:flex;
        font-size:3rem;
        height:4.8rem;
        justify-content:center;
        position:relative;
        padding:0 2.5rem;
        transition:.15s ease-in-out color;
        z-index:0;
        
        &::after,
        &::before{
            background-color:${({theme}) => theme.colors.background};
            height:50%;
            transition:.15s linear width;
            width:0%;
            z-index:-1;
        }
        &::after{
            left:0;
            top:0;
        }
        &::before{
            bottom:0;
            right:0;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.color};
            &::after,
            &::before{
                width:100%;
            }
        }
    }

`