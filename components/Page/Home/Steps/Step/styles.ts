import styled from 'styled-components';
const gridWidth = '100% - 8rem';
export const StepWrapper = styled.li`
    align-items:start;
    display:grid;
    justify-items:center;
    margin:auto;
    width:75%;
    & > * {
        align-items:center;
        display:flex;
        flex-flow:column;
        height:100%;
        justify-content:center;
    }
    & > div{
        height:7rem;
        width:7rem;
        & > span{
            align-items:center;
            color:${({theme}) => theme.colors.primary};
            display:flex;
            font-family:${({theme}) => theme.fonts.family.heading};
            font-size:5rem;
            height:100%;
            justify-content:center;
            width:100%;
        }
    }
    & > section{
        width:100%;
        & > * {
            width:100%;
        }
        & > h3 {
            color:${({theme}) => theme.colors.color};
            font-size:2.85rem;
            font-weight:500;
            padding:.5rem .85rem;
        }
        & > p {
            color:${({theme}) => theme.colors.gray};
            font-size:1.7rem;
            line-height:calc(1.7rem * 2);
            opacity:.7;
            padding:.55rem;
        }

    }
    &:nth-of-type(odd){
        background:blue;
        grid-template-columns:${gridWidth} 7rem;
        & > div{
            grid-column:2;
            background:red;
        }
        & > section{
            background:green;
            grid-column:1;
            text-align:end;
        }
    }
    &:nth-of-type(even){
        margin-top:15rem;
        grid-template-columns:7rem ${gridWidth};
        & > div{
            grid-column:1;
        }
        & > section{
            grid-column:2;
            text-align:start;
            
        }
    }
`