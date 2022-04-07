import styled from 'styled-components';
export const ButtonWrapper = styled.button`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:5rem;
    justify-content:center;
    margin:auto 0 auto 5rem;
    position:relative;
    &::before{
        border:.35rem solid ${({theme}) => theme.colors.primary};
        border-radius:2.5rem;
        height:110%;
        transition:.2s linear border;
        width:110%;
    }
    & > div,
    & > p{
        flex-shrink:0;
    }
    & > p{
        align-items:center;
        color:${({theme}) => theme.colors.primary};
        display:flex;
        font-size:2.1rem;
        height:100%;
        justify-content:center;
        padding:0 2rem;
        transition:.2s linear color;
    }
    & > div{
        font-size:3rem;
        height:5rem;
        position:relative;
        width:5rem;
        &,
        & > i{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > i{
            color:${({theme}) => theme.colors.primary};
            height:100%;
            position:absolute;
            transition:.2s linear color, .2s .1s linear transform;
            width:100%;
        }
    }
    &:focus,
    &:hover{
        &::before{
            border:.35rem solid ${({theme}) => theme.colors.color};
        }
        & > p{
            color:${({theme}) => theme.colors.color};
        }
        & > div > i{
            color:${({theme}) => theme.colors.color};
            transform:translateX(1rem) scale(.8);
        }
    }
    @media only screen and (max-width:650px){
        height:4rem;
        margin:auto auto auto auto;
        & > p{
            font-size:1.65rem;
        }

    }
`