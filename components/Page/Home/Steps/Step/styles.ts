import styled from 'styled-components';
export const StepWrapper = styled.li`
    align-items:start;
    /* background:darkblue; */
    display:flex;
    flex-wrap:nowrap;
    margin:auto;
    width:65%;
    @media only screen {
        @media (max-width:1050px){
            width:85%;
        }
        @media (max-width:800px){
            width:95%;
        }
        @media (max-width:650px){
            flex-direction:column !important;
            justify-content:center;
        }
    }
    & > * {
        flex-shrink:0;
    }
    & > div {
        /* background-color:red; */
        
        flex:6rem;
        height:6rem;
        width:6rem;
        @media only screen{
            @media (max-width:650px){
            }
        }
        & > span{
            align-items:center;
            color:${({theme}) => theme.colors.primary};
            display:flex;
            font-family:${({theme}) => theme.fonts.family.heading};
            font-size:4rem;
            height:100%;
            justify-content:center;
            width:100%;
        }
    }
    & > section{
        /* background:darkcyan;. */
        display:flex;
        flex:calc(100% - 6rem);
        flex-flow:column nowrap;
        justify-content:center;
        & > * { 
            width:100%;
        }
        & > h3{
            color:${({theme}) => theme.colors.color};
            font-size:2.8rem;
            font-weight:500;
            @media only screen{
                @media (max-width:700px){
                    font-size:2.45rem;
                }
            }
        }
        & > p {
            color:${({theme}) => theme.colors.gray};
            font-size:1.7rem;
            line-height:calc(1.7rem * 1.85);
            opacity:.7;
            @media only screen{
                @media (max-width:700px){
                    font-size:1.65rem;
                    line-height:calc(1.65rem * 1.75);
                }
            }
        }
    }
    &:nth-of-type(even){
        flex-direction:row;
        margin-top:15rem;
        & > section{
            text-align:end;
        }
        @media only screen{
            @media (max-width:650px){
                align-items:flex-end;
            }
            @media (max-width:540px){
                margin-top:0rem;
            }
        }
    }
    &:nth-of-type(odd){
        flex-direction:row-reverse;
        & > section{
            text-align:start;
        }
        @media only screen{
            @media (max-width:650px){
                align-items:flex-start;
            }
        }
    }
`