import styled, { css } from 'styled-components';
interface i {
    open : boolean
}
export const MenuButtonWrapper = styled.button<i>`
    @media only screen and (max-width:980px){
        align-items:center;
        display:flex;
        flex-direction:column;
        flex-shrink:0;
        height:3rem;
        justify-content:space-evenly;
        overflow:hidden;
        position:relative;
        row-gap:.5rem;
        width:3rem;
        & > span{
            background-color:${({theme}) => theme.colors.primary};
            border-radius:5.5rem;
            height:.4rem;
            opacity:1;
            visibility:visible;
            transition:.2s linear background-color, .2s .2s linear display, .2s linear left, .2s linear opacity, .2s linear position, .2s linear transform, .2s linear top, .2s linear visibility;
            width:100%;
        
        }
        &:hover > span{
            background-color:${({theme}) => theme.colors.background};
            transform:scale(.85);
        }
        ${({open}) => open && css`
            & > span:first-of-type,
            & > span:last-of-type{
                left:50%;
                position:absolute;
                top:50%;
            }
            & > span:first-of-type{
                transform:translate(-50%,-50%) rotate(45deg);
            }
            & > span:nth-of-type(2){
                display:none;
                opacity:0;
                visibility:hidden;
            }
            & > span:last-of-type{
                transform:translate(-50%,-50%) rotate(-45deg);
            }
        
        `}
    }
`