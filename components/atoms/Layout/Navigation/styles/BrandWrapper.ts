import styled from "styled-components";
export const BrandWrapper = styled.div`
    align-items:center;
    display:flex;
    height:100%;
    justify-content:start;
    padding-left:2rem;
    width:100%;
    & > p{
        cursor:default;
        font-size:2.7rem;
        font-weight:600;
        user-select:none;
    }
    @media only screen and (max-width:980px){
        & > p{
            font-size:1.9rem;
        }   
    }
`