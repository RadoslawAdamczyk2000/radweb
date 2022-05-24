import styled from 'styled-components';
export const CardWrapper = styled.li`
    &,
    & > a,
    & > a > h2{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a{
        & > h2{
            font-size:2rem;
            font-weight:600;
            padding:.25rem 1.75rem;
            position:relative;
            transition:.2s linear color, .2s linear transform;
            &::before{
                background-color:${({theme}) => theme.colors.secondary};
                bottom:-.25rem;
                height:.4rem;
                left:0;
                transition:.2s linear width;
                width:0%;
            }
        }
    }
    &:focus,
    &:hover{
        & > a{
            & > h2{
                color:${({theme}) => theme.colors.secondary};
                transform:scaleX(.95);
                &::before{
                    width:100%;
                }
            }
        }
    }
`