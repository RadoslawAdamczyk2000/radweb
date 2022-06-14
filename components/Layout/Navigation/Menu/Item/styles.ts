import styled from 'styled-components';
const Button = styled.li`
    &,
    & > a {
        align-items:center;
        display:flex;
    }
    & > a {
        justify-content:center;
    }
`
export const Main = styled(Button)`
    height:3rem;
    & > a {
        color:${({theme}) => theme.colors.color};
        font-size:1.75rem;
        height:100%;
        font-weight:500;
        padding:0 .35rem;
        position:relative;
        transition:.12s linear color;
        &::before{
            background-color:${({theme}) => theme.colors.primary};
            border-radius:.5rem;
            bottom:0;
            height:.2rem;
            left:0;
            transition:.2s linear width;
            width:0%;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.primary};
            &::before{
                width:100%;
            }
        }
    }
`

export const Expand = styled(Main)`
    & > .button{
        align-items:center;
        cursor:pointer;
        display:flex;
        font-size:2.5rem;
        height:3rem;
        justify-content:center;
        transition:.12s linear color,.12s linear transform;
        width:3rem;
        &:hover{
            color:${({theme}) => theme.colors.primary};
            transform:scale(.95);
        }
    }
`
export const Submenu = styled(Button)`
    & > a {
        background-color:${({theme}) => theme.colors.primary};
        color:${({theme}) => theme.colors.color};
        padding:.25rem .35rem;
        position:relative;
        transition:.2s linear color;
        z-index:0;
        &::before{
            background-color:${({theme}) => theme.colors.color};
            left:0;
            height:100%;
            top:50%;
            transform:translateY(-50%);
            transition:.2s linear width;
            width:0%;
            z-index:-1;
        }
        &:hover{
            color:${({theme}) => theme.colors.background};
            &::before{
                width:100%;
            }

        }
    }
`