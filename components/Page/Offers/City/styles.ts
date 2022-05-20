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
            font-weight:500;
            padding:.25rem 1.75rem;
            position:relative;
            transition:.2s linear color, .2s linear transform;
            &::before{
                background-color:red;
                bottom:0;
                height:.25rem;
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
                color:red;
                transform:scaleX(.95);
                &::before{
                    width:100%;
                }
            }
        }
    }
`