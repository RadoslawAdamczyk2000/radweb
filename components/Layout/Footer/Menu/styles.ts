import styled from 'styled-components';
export const MenuWrapper = styled.menu`
    justify-content:space-evenly;
    row-gap:.25rem;
    min-width:10rem;
    &,
    & > li,
    & > li > a,
    & > li > a > p{
        align-items:start;
        flex-flow:column;
        display:flex;
    }
    & > li{
        height:3rem;
        &,
        & > a{
            width:100%;
        }
        & > a,
        & > a > p{
            height:100%;
            justify-content:center;
            width:100%;
        }
        & > a {
            position:relative;
            z-index:0;
            &::before{
                background:yellow;
                left:0;
                height:100%;
                transition:.2s linear width;
                width:0;
                z-index:1;
            }
            & > p {
                font-size:1.7rem;
                font-weight:600;
                text-indent:1rem;
                transition:.2s linear transform;
            }
        }
        &:focus,
        &:hover{
            & > a{
                &::before{
                    width:1.25rem;
                }
                & > p{
                    transform:translateX(1.25rem);
                }
            }
        }
    }
    @media only screen {
        @media (max-width:950px){
            flex-flow:row wrap;
            gap:1rem;
            justify-content:center;
            width:95%;
            & > li{
                flex-shrink:0;
                width:auto;
                & > a{
                    padding:0 1rem;
                    &::before{
                        display:none;
                    }
                    & > p{
                        text-indent:0;
                    }
                }
                &:focus,
                &:hover{
                    & > a{
                        &::after{
                            width:100%;
                        }
                        & > p{
                            transform:translateX(0);
                        }
                    }
                }
            }
        }
    }
`