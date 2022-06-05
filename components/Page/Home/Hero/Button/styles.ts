import styled from 'styled-components';
export const ButtonWrapper = styled.div`
    align-items:center;
    border-radius:50%;
    color:#fff;
    cursor:pointer;
    display:flex;
    font-size:5rem;
    height:6rem;
    justify-content:center;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:6rem;
    z-index:66;
    user-select:none;
    & > * {
        transition:.2s linear transform;
    }
    &.left{
        left:2rem;
        &:focus,
        &:hover{
            & > * {
                transform:translateX(-1rem);
            }
        }
    }
    &.right{
        right:2rem;
        &:focus,
        &:hover{
            & > * {
                transform:translateX(1rem);
            }
        }
    }
    @media only screen{
        @media (max-width:530px){
            font-size:3rem;
            height:4.5rem;
            width:4.5rem;
            &.left{
                left:1rem;
            }
            &.right{
                right:1rem;
            }
        }
        @media (max-width:450px){
            font-size:3rem;
            height:3.5rem;
            width:3.5rem;
            &.left{
                left:.35rem;
            }
            &.right{
                right:.35rem;
            }
        }
    }

`