import styled from 'styled-components';
export const MovieWrapper = styled.div`
    height:96vh;
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
        grid-template-columns:2fr 2.85fr;
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
                color:${({theme}) => theme.colors.color};
                font-size:5rem;
                position:relative;
                text-shadow:0 0 2rem hsla(0,100%,0%,1);
                user-select:none;
            }
        }
    }

    @media only screen {
        @media (max-width:825px){
            height:90vh;
            & > div {
                & > section {
                    grid-column:1/-1;
                    padding:2rem .5rem 2rem;
                }
            }
        }
        @media (max-width:660px){
            & > div {
                & > section {
                    & > h1{
                        font-size:4rem;
                    }
                }
            }
        }
        @media (max-width:360px){
            & > div {
                & > section {
                    & > h1{
                        font-size:3.25rem;
                    }
                }
            }
        }
        @media (max-width:260px){
            & > div {
                & > section {
                    & > h1{
                        font-size:3rem;
                    }
                }
            }
        }
    }

`