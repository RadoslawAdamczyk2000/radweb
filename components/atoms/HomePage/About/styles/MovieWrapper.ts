import styled from "styled-components";
export const MovieWrapper = styled.div`
    align-items:center;
    aspect-ratio:16/9;
    display:flex;
    height:30.94rem;
    justify-content:center;
    max-width:90%;
    width:55rem;
    & > iframe{
        border:none;
        background:none;
        height:100%;
        outline:none;
        width:100%;
    }
`