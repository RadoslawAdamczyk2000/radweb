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


`