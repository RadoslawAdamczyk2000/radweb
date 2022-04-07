import styled from 'styled-components';
export const TechWrapper = styled.ul`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:1.5rem;
    justify-content:center;
    margin:2rem auto;
    max-width:95%;
    padding:2rem 4rem;
    width:80rem;
    & > li{
        color:${({theme}) => theme.colors.primary};
        height:4rem;
        transition:.2s linear color, .2s linear transform;
        width:4rem;
        &,
        & > button{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > button {
            color:inherit;
            font-size:3rem;
            height:100%;
            transition:.2s linear color;
            width:100%;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.tertiary};
            transform:scale(1.5);
           
        }
    }
`