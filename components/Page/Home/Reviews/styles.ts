import styled from 'styled-components';
export const ReviewWrapper = styled.div`
    align-items:center;
    background-color:gray;
    display:flex;
    flex-flow:column;
    min-height:40rem;
    justify-content:space-around;
    margin:2rem auto;
    max-width:99%;
    width:90rem;
    @media only screen {
        @media (max-width:650px){
            gap:1rem;
            padding:1.58rem 0;
        }
    }
    & > *  {
        align-items:center;
        display:flex;
        width:100%;
    }
    & > .image{
        justify-content:space-between;
        padding:0 4rem;
        @media only screen {
            @media (max-width:650px){
                flex-flow:column;
            }
        }
        & > figure{
            border-radius:50%;
            height:15rem;
            overflow:hidden;
            position:relative;
            width:15rem;
        }
        & > h4{
            font-size:3.2rem;
            @media only screen {
                @media (max-width:650px){
                    font-size:2.4rem;
                }
            }
        }
    }
    & > .comment{
        justify-content:center;
        & > p{
            font-size:1.9rem;
            line-height:calc(1.9rem * 2);
            width:85%;
            @media only screen {
                @media (max-width:650px){
                    font-size:1.7rem;
                    line-height:calc(1.7rem * 2);
                }
                @media (max-width:320px){
                    font-size:1.6rem;
                    line-height:calc(1.6rem * 2);
                    width:92.5%;
                }
            }
        }
    }
    & > .stars{
        align-items:center;
        display:flex;
        flex-flow:row;
        gap:1rem;
        justify-content:flex-end;
        padding:0 6rem;
        & > li {
            align-items:center;
            display:flex;
            font-size:2.5rem;
            height:2.8rem;
            justify-content:center;
            width:2.8rem;
            &.rate{
                color:gold;
            }
        }
        @media only screen {
            @media (max-width:350px){
                gap:1rem;
                justify-content:center;
                padding:0 2rem;
            }
            @media (max-width:220px){
                & > li {
                    font-size:2rem;
                    height:2.3rem;
                    width:2.3rem;
                }
            }
        }
    }
`