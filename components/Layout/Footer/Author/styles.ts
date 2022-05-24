import styled from 'styled-components';
export const AuthorWrapper = styled.div`
    color:${({theme}) => theme.colors.background};
    margin:1.8rem 0 0;
    &,
    & > p{
        align-items:center;
        display:flex;
        justify-content:center;
        text-align:center;
    }
    & > p{
        cursor:default;
        font-size:1.8rem;
        font-weight:800;
        user-select:none;
        width:100%;
    }
`