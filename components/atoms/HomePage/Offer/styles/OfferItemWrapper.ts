import styled from "styled-components";
export const OfferItemWrapper = styled.li`
    & > button{
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        height:4.5rem;
        justify-content:space-between;
        & > p{
            align-items:center;
            color:${({theme}) => theme.colors.color};
            display:flex;
            font-size:2rem;
            font-weight:600;
            height:4.5rem;
            justify-content:center;
            padding:0 2.5rem;
            text-align:start;
            transition:.2s linear color;
        }
        & > div{
            height:4.5rem;
            overflow:hidden;
            position:relative;
            width:4.5rem;
            & > i{
                color:${({theme}) => theme.colors.color};
                font-size:3.5rem;
                height:100%;
                position:absolute;
                top:105%;
                transition:.2s linear color,.2s linear transform;
                width:100%;
            }
            &,
            & > i{
                align-items:center;
                display:flex;
                justify-content:center;
            }
        }
    }
    &:focus,
    &:hover{
        & > button{
            & > p{
                color:${({theme}) => theme.colors.tertiary};
            }
            & > div > i{
                color:${({theme}) => theme.colors.tertiary};
                transform:translateY(-105%);
            }
        }
    }
    @media only screen {
        @media (max-width:1100px){
            & > button{
                & > p{
                    font-size:1.8rem;
                    padding:0 .25rem;
                }
                & > div{
                    width:3.5rem;
                    & > i{
                        font-size:2.5rem;
                    }
                }
            }
        }
        @media (max-width:990px) {
            & > button {
                & > div{
                    display:none;
                }
            }
        }
    }
`