import styled from 'styled-components';
export const MovieWrapper = styled.div`
    height:98vh;
    position:relative;
    width:100%;
    & > video{
        height:100%;
        object-fit:cover;
        object-position:center;
        position:relative;
        width:100%;
    }
    & > div{
        display:grid;
        grid-template-columns:3.5fr 2.5fr;
        height:100%;
        left:0;
        position:absolute;
        top:0;
        width:100%;
        & > section{
            align-items:flex-end;
            display:flex;
            flex-flow:column;
            grid-column:2;
            padding:5rem 1rem 4rem;
            text-align:end;
            justify-content:flex-end;
            & > h1{
                font-size:5rem;
                position:relative;
                &::before{
                    background-color:${({theme}) => theme.colors.color};
                    border-radius:10rem;
                    height:.35rem;
                    right:0;
                    top:50%;
                    transform:translateY(-50%);
                    width:90%;
                }
            }
        }
    }
`