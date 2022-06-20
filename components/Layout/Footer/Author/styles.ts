import styled from 'styled-components';
export const Wrapper = styled.div`
    align-items:center;
    display:flex;
    margin:1.5rem 0 .5rem;
    justify-content:center;
    & > p{
        color:${({theme}) => theme.colors.color};
        font-size:1.5rem;
        font-weight:700;
        text-align:center;
        word-break:break-word;
        word-wrap:break-word;
        user-select:none;
    }
`