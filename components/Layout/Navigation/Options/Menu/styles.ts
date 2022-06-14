import styled, { css } from 'styled-components';
interface i {
    isOpen:boolean;
}
export const MenuWrapper = styled.div<i>`
    align-items:center;
    cursor:pointer;
    display:flex;
    flex-flow:column;
    height:3.25rem;
    justify-content:space-around;
    overflow:hidden;
    position:relative;
    width:3.25rem;
    & > span{
        background-color:${({theme}) => theme.colors.gray};
        border-radius:.15rem;
        height:.15rem;
        transition:.15s linear background-color,.15s .15s linear width;
        width:100%;
    }
    ${({isOpen}) => isOpen && css`
        & > span{
            background-color:${({theme}) => theme.colors.color};
            left:50%;
            position:absolute;
            transition:.15s linear background-color,.15s .15s linear display, .15s linear opacity,.15s linear transform,.15s linear visibility,.15s .15s linear width;
            top:50%;
            width:70%;
            &:first-of-type{
                transform:translate(-50%,-50%) rotate(45deg);
            }
            &:nth-of-type(2){
                display:none;
                opacity:0;
                visibility:hidden;
            }
            &:last-of-type{
                transform:translate(-50%,-50%) rotate(-45deg);
            }
        }
    `}




    &:focus,
    &:hover{
        & > span{
            background-color:${({theme}) => theme.colors.tertiary};
        }
    }

`