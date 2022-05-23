import styled from 'styled-components';
export const HeroWrapper = styled.header`
    align-items: center;
    display:flex;
    flex-flow:column;
    justify-content:center;
    margin:0 auto;
    max-width:99%;
    row-gap:1rem;
    padding:2rem 0;
    width:95rem;
    & > * {
        width:100%;
    }
    .return{
        justify-content:flex-end;
        &,
        & > a,
        & > a > *{
            align-items:center;
            display:flex;
            flex-flow:row nowrap;
        }
        & > a{
            justify-content:center;
            & > span{
                font-size:3rem;
                height:3.5rem;
                justify-content:center;
                transition:.2s linear color,.2s linear transform;
                width:3.5rem;
            }
            & > p{
                height:3.5rem;
                font-size:2.5rem;
                font-weight:700;
                justify-content:center;
                padding:0 1rem;
                position:relative;
                transition:.2s linear color;
                &::before{
                    background:red;
                    bottom:0;
                    height:.5rem;
                    right:0;
                    transition:.2s linear width;
                    width:0%;
                }
            }
            &:focus,
            &:hover{
                & > * {
                    color:red;
                }
                & > span{
                    transform:scale(1.15);
                }
                & > p{
                    &::before{
                        width:100%;
                    }
                }
            }
        }
    }
    .content{
        & > h1{
            font-size:4.2rem;
            font-weight:700;
            text-align:start;
            @media only screen {
                @media (max-width:650px){
                    font-size:3.8rem;
                    text-align:center;
                }
                @media (max-width:450px){
                    font-size:3.3rem;
                }
                @media (max-width:200px){
                    font-size:2.9rem;
                }
            }
        }
        & > ul{
            align-items:center;
            display:flex;
            flex-flow:row wrap;
            justify-content:center;
            gap:1.5rem;
            padding:1.5rem 1.2rem;
            & > li{
                align-items:center;
                color:#aaa;
                display:flex;
                font-size:3rem;
                height:3.5rem;
                justify-content:center;
                width:3.5rem;
                @media only screen{
                    @media (max-width:200px){
                        font-size:2rem;
                    }
                }
            }
        }
        & > p:first-of-type{
            font-size:2.2rem;
            text-align:end;
        }
        & > p:last-of-type{
            font-size:2.1rem;
            font-weight:500;
            line-height:calc(2.2rem * 2);
            text-align:justify;
            text-indent:2rem;
            @media only screen {
                @media (max-width:650px){
                    padding:0 1.85rem;
                }
                @media (max-width:200px){
                    font-size:1.9rem;
                    padding:0 1.15rem;
                    text-align:start;
                    text-indent:1.2rem;
                }
            }
            a{
                color:red;
                text-decoration:underline;
                transition:.2s linear color;
                &:hover{
                    color:fuchsia;
                }
            }
        }
    }
    .image{
        aspect-ratio:16/9;
        max-height:45rem;
        position:relative;
        width:100%;
        @media only screen{
            @media (max-width:200px){
                aspect-ratio:4/9;
            }
        }
    }
`