import styled from 'styled-components';
export const LangWrapper = styled.div`
    background-color:${({theme}) => theme.colors.color};
    color:${({theme}) => theme.colors.background};
    display:grid;
    grid-template-rows:5rem calc(100% - 5rem);
    height:100vh;
    left:0;
    position:fixed;
    top:0;
    width:100vw;
    z-index:999999;
    & > div{
        align-items:center;
        display:flex;
        &:first-of-type{
            justify-content:flex-end;
            padding:.5rem 1.5rem;
        }
        &:last-of-type{
            justify-content:center;
        }
    }
`