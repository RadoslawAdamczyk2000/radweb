import styled from 'styled-components';
const MenuItem = styled.li`
    &,
    & > div {
        & > a{
            align-items:center;
            display:flex;
            justify-content:center;        
        }
    }
`
export const MenuItemExpand =  styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    @media only screen {
        @media (max-width:900px){
            justify-content:start;
        }
    }
    & > * {
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a{
        font-size:1.65rem;
        font-weight:700;
        height:3.45rem;
        overflow:hidden;
        padding:0 .85rem;
        position:relative;
        z-index:0;
        @media only screen{
            @media (max-width:650px){
                font-size:1.55rem;
                font-weight:600;
            }
        }
        &::before{
            background-color:${({theme}) => theme.colors.tertiary};
            height:100%;
            left:-125%;
            width:115%;
            transform:skewX(-10deg);
            transition:.12s linear transform;
            z-index:-1;
        }
        &:focus,
        &:hover{
            &::before{
                transform:translateX(105%) skewX(-10deg);
            }
        }
    }
    & > div{
        color:inherit;
        cursor:pointer;
        font-size:2.5rem;
        height:3.45rem;
        width:3.45rem;
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.tertiary};
        }
    }
`
export const MenuItemMain = styled(MenuItem)`
    & > div {
        & > a{
            font-size:1.65rem;
            height:3.45rem;
            font-weight:700;
            overflow:hidden;
            padding:0 .85rem;
            position:relative;
            z-index:0;
            @media only screen{
                @media (max-width:650px){
                    font-size:1.55rem;
                    font-weight:600;
                }
            }
            &::before{
                background-color:${({theme}) => theme.colors.tertiary};
                height:100%;
                left:-125%;
                width:115%;
                transform:skewX(-10deg);
                transition:.12s linear transform;
                z-index:-1;
            }
            &:focus,
            &:hover{
                &::before{
                    transform:translateX(105%) skewX(-10deg);
                }
            }
        }
    }
`
export const MenuItemSubmenu = styled(MenuItem)`
    & > div{
        & > a{
            background-color:${({theme}) => theme.colors.secondary};
            border-radius:.45rem;
            color:#fff;
            padding:0 .5rem;
            transition:.12s linear filter;
            &:focus,
            &:hover{
                filter:brightness(110%);
            }
        }
    }
`