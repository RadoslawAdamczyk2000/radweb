import styled from 'styled-components';
export const SocialWrapper = styled.li`
    & > a {
        color:${({theme}) => theme.colors.background};
        height:3.5rem;
        opacity:.75;
        position:relative;
        width:3.5rem;
        transition:.2s linear color,.2s linear opacity;
        &,
        & > p{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        & > p{
            font-size:3rem;
            height:100%;
            transition:.2s linear transform;
            width:100%;
        }
        &::before{
            background-color:${({theme}) => theme.colors.quatenary};
            bottom:0;
            height:.35rem;
            left:0;
            transition:.2s linear width;
            width:0%;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.quatenary};
            opacity:1;
            & > p {
                transform:translateY(-.5rem) scale(1.15);
            }
            &::before{
                width:100%;
            }
        }
    }
    @media only screen {
        @media (max-width:640px){
            & > a{
                height:3rem;
                width:3rem;
                & > p {
                    font-size:2rem;
                }
            }
        }
    }
`