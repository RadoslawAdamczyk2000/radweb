import styled from 'styled-components';
export const ButtonWrapper = styled.div`
    cursor:pointer;
    height:3.5rem;
    position:relative;
    width:3.5rem;
    & > span{
        background-color:${({theme}) => theme.colors.background};
        border-radius:3rem;
        height:.25rem;
        left:50%;
        position:absolute;
        top:50%;
        transition:.15s linear background-color,.15s linear width;
        width:100%;
        &:first-of-type{
            transform:translate(-50%,-50%) rotate(45deg);
        }
        &:last-of-type{
            transform:translate(-50%,-50%) rotate(-45deg);
        }
    }
    &:focus,
    &:hover{
        & > span{
            width:85%;
        }
    }
`