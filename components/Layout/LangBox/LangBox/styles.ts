import styled from 'styled-components';
export const LangBoxWrapper = styled.div`
    background-color:${({theme}) => theme.colors.secondary};
    height:100vh;
    left:0;
    position:fixed;
    top:0;
    width:100vw;
    z-index:99999999999999999999;
    & > div{
        align-items:center;
        display:flex;
        &:first-of-type{
            justify-content:flex-end;
            height:10vh;
            padding:0 2rem;
            & > .button{
                align-items:center;
                color:${({theme}) => theme.colors.background};
                cursor:pointer;
                display:flex;
                font-size:6rem;
                height:5rem;
                justify-content:center;
                transition:.2s linear transform;
                width:5rem;
                &:focus,
                &:hover{
                    transform:scale(.9);
                }
            }
        }
        &:last-of-type{
            height:90vh;
            justify-content:center;
            & > ul{
                align-items:center;
                display:flex;
                flex-flow:column;
                height:80%;
                justify-content:center;
                row-gap:2rem;
                width:95%;
            }
            @media only screen {
                @media (max-width:750px) and (orientation:landscape){
                    overflow:scroll;
                    &,
                    & > ul{
                        justify-content:flex-start;
                    }
                    & > ul  > li:last-of-type{
                        margin-bottom:5rem;
                    }
                }
            }
        }
    }
`