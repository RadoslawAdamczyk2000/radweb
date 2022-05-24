import styled from 'styled-components';
export const ResultWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    padding:1rem 2.5rem;
    p{
        color:${({theme}) => theme.colors.primary};
        cursor:default;
        font-size:2.4rem;
        font-weight:800;
        user-select:none;
    }
`
export const SearchWrapper = styled.div`
    align-items:center;
    border-radius:.5rem;
    display:flex;
    flex-flow:row;
    justify-content:center;
    margin:0 auto;
    max-width:90%;
    width:45rem;
    @media only screen {
        @media  (min-width:1450px){
            width:65rem;
        }
        @media (max-width:380px){
            width:90%;
        }
    }
    & > div{
        background:${({theme}) => theme.colors.color};
        height:4.5rem;
        @media only screen {
            @media  (min-width:1450px){
                height:6.5rem;
            }
        }
        &:first-of-type{
            border-radius:.5rem 0 0 .5rem;
            position:relative;
            width:calc(100% - 4rem);
            @media only screen {
                @media  (min-width:1450px){
                    border-radius:1.5rem 0 0 1.5rem;
                }
            }
            & > input{
                color:${({theme}) => theme.colors.background};
                cursor:text;
                color:white;
                font-size:1.65rem;
                height:100%;
                padding:0 .5rem 0 1.5rem;
                transition:.2s linear color;
                width:100%;
                @media only screen {
                    @media  (min-width:1450px){
                        font-size:2.2rem;
                    }
                }
                
                &::-webkit-search-cancel-button{
                    -webkit-appearance: none;
                    all:unset;
                }
                &::placeholder{
                    color:inherit;
                    text-align:center;
                }
            }
        }
        &:last-of-type{
            border-radius:0 .5rem .5rem 0;
            color:${({theme}) => theme.colors.tertiary};
            width:4.5rem;
            @media only screen {
                @media  (min-width:1450px){
                    border-radius:0 1.5rem 1.5rem 0;
                    width:6.5rem;
                }
            }
            &,
            & > span{
                align-items:center;
                display:flex;
                justify-content:center;
            }
            & > span{
                cursor:pointer;
                font-size:2.5rem;
                height:100%;
                transition:.2s linear color,.2s linear transform;
                width:100%;
                @media only screen {
                    @media  (min-width:1450px){
                        font-size:2.8rem;
                    }
                }
            }
            &:focus,
            &:hover{
                & > span{
                    transform:scale(1.15) rotate(35deg);
                }
            }
        }
    }
    &:focus,
    &:hover{
        & > div{
            color:${({theme}) => theme.colors.quatenary};
            & >input{
                color:${({theme}) => theme.colors.quatenary};
            }
        }
    }
`