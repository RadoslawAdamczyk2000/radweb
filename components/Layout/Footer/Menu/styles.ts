import styled from 'styled-components';
export const MenuWrapper = styled.menu`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    gap: 1.25em;
    & > li{
        & > a{
            align-items:center;
            display:flex;
            font-size:2rem;
            justify-content:center;
            padding:.25rem 1.85rem;
            position:relative;
            transition:.2s linear color;
            z-index:0;
            &::after,
            &::before{
                background:aqua;
                height:100%;
                transform:skewX(-25deg);
            }
            &::after{
                background:orange;
                transition:.2s linear width;
                width:0%;
                z-index:-1;
            }
            &::before{
                width:100%;
                z-index:-2;
            }
        }
        &:focus,
        &:hover{
            & > a{
                color:white;
                &::after{
                    width:100%;
                }
            }
        }
    }
`