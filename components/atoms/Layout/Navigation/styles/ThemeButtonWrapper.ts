import styled from "styled-components";
export const ThemeButtonWrapper = styled.button`
    align-items:center;
    border:.2rem solid ${({theme}) => theme.colors.color};
    border-radius:50%;
    color:${({theme}) => theme.colors.color};
    display:flex;
    font-size:2.2rem;
    height:3.8rem;
    justify-content:center;
    width:3.8rem;
    @media only screen and (max-width:980px){
        border:none;
        color:${({theme}) => theme.colors.background};
        font-size:1.65rem;
        height:2.5rem;
        width:2.5rem;
    }
   
`