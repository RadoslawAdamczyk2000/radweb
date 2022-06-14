import styled from 'styled-components';
export const ButtonWrapper = styled.div`
    cursor:pointer;
    height:4.5rem;
    position:relative;
    width:4.5rem;
    & > span{
        background-color:${({theme}) => theme.colors.gray};
        border-radius:3rem;
        height:.5rem;
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
            background-color:${({theme}) => theme.colors.background};
            width:85%;
        }
    }
`