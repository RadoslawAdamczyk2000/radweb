import styled from "styled-components";
export const CardWrapper = styled.figure`
    align-items:center;
    border:.5rem solid ${({theme}) => theme.colors.secondary};
    border-radius:2rem;
    display:flex;
    height:35rem;
    justify-content:center;
    position:relative;
    width:30rem;
    a{
        padding:1rem 2rem;
        &:last-of-type{
            margin-left:2rem;
            font-size:1.8rem;
            width:15rem;
        }
    }
    &,
    & > div{
        align-items:start;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    & > div{
        padding:.75rem;
        row-gap:1.5rem;
        h5{
            align-items:center;
            color:${({theme}) => theme.colors.tertiary};
            display:flex;
            justify-content:start;
            font-size:2.2rem;
            text-align:start;
            width:100%;
        }
        p{
            font-size:1.45rem;
            line-height:2.7rem;
            padding:.85rem;
            text-align:start;
            width:100%;
        }
    }
    &:focus,
    &:hover{
        & > figcaption{
        }
    }
    @media only screen and (max-width:780px){
        margin:10rem auto;
        overflow:hidden;
        width:35rem;
        & > figcaption{
            box-shadow:0 -1rem 2rem hsla(0,100%,0%,.5);
            top:60%;
            transition:.2s linear transform;
        }
        &:focus,
        &:hover{
            & > figcaption{
                transform:translateY(-60%);
            }
        }
    }
`   