import styled,{ css } from 'styled-components';
interface i {
    isInput : boolean
}
export const InputWrapper = styled.div<i>`
    align-items:start;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    max-width:95%;
    & > label{
        align-items:center;
        display:flex;
        font-size:1.8rem;
        font-weight:500;
        height:5rem;
        justify-content:center;
        width:10rem;
    }
    & > div{
        max-width:calc(95% - 10rem);
        width:35rem;
    }
    ${({isInput}) => isInput && css`
        & > div{
            height:5rem;
            & > input{
                border-bottom:.25rem solid #aaa;
                color:#aaa;
                font-size:1.65rem;
                font-weight:500;
                height:100%;
                padding:0 1rem;
                text-align:center;
                transition:.2s ease-in-out border-bottom,.2s ease-in-out color;
                width:100%;
                &:focus{
                    border-bottom:.25rem solid #222;
                    color:#222;
                }
            }
        }
    `}
`