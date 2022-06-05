import styled, { css } from 'styled-components';
interface intMenuButton{
    isActive:boolean;
}
export const MenuButtonWrapper = styled.div<intMenuButton>`
    display:none;
    @media only screen and (max-width:900px){
        align-items:center;
        cursor:pointer;
        display:flex;
        flex-flow:column;
        height:3.85rem;
        justify-content:space-evenly;
        overflow:hidden;
        padding:.35rem;
        position:relative;
        width:3.85rem;
        & > span{
            background-color:${({theme}) => theme.colors.color};
            height:.3rem;
            transition:.2s linear transform,.2s linear width;
            width:95%;
            ${({isActive}) => isActive && css`
                left:50%;
                position:absolute;
                top:50%;
                width:80%;
                &:first-of-type{
                    transform:translate(-50%,-50%) rotate(45deg);
                }
                &:last-of-type{
                    transform:translate(-50%,-50%) rotate(-45deg);
                }
            `}
        }
    }
`