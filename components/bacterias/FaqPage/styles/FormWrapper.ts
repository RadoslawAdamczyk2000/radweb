import styled from 'styled-components';
export const FormWrapper = styled.div`
    height:100vh;
    left:0;
    position:fixed;
    top:0;
    width:100vw;
    z-index:9999;
    &,
    & > .box,
    & > .box > .close,
    & > .box > .form,
    & > .box > .form > div,
    & > .box > .close > button{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > .box{
        background-color:#fffefe;
        box-shadow:0 0 2rem hsla(0,100%,0%,.25);
        color:#000;
        flex-direction:column;
        min-height:25rem;
        margin:auto;
        justify-content:space-between;
        max-width:100%;
        padding:2rem 0;
        row-gap:2rem;
        width:75rem;
        & > .close{
            color:#111;
            height:4.5rem;
            justify-content:flex-end;
            padding-right:2rem;
            width:100%;
            & > div{
                cursor:pointer;
                font-size:3.5rem;
                height:4rem;
                transition:.2s linear transform;
                width:4rem;
                &:focus,
                &:hover{
                    transform:scale(.85);
                }
            }
        }
        & > .form{
            flex-direction:column;
            padding:2rem 0;
            row-gap:2rem;
            width:100%;
            & > div{
                gap:1rem;
            }
        }
    }
`