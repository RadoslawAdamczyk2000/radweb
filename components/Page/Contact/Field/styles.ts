import styled, { keyframes } from 'styled-components';
const AnimateAlert = keyframes`
    0%{
        background-color:hsla(81, 77%, 41%,100);
        opacity:1;
        visibility:visible;
    }
    10%{
        background-color:hsla(81, 77%, 41%,100);
        opacity:1;
        visibility:visible;
    }
    95%{
        background-color:hsla(81, 77%, 41%,100);
        opacity:1;
        visibility:visible;
    }
    100%{
        animation-play-state: paused;
        background-color:hsla(81, 77%, 41%,0);
        opacity:0;
    }
`
export const AlertWrapper = styled.div`
    animation: ${AnimateAlert} 1s ease-in-out 1s normalw 1;
    align-items: center;
    background-color:#80B918;
    border-radius:1.15rem;
    cursor:default;
    display:flex;
    flex-flow:column;
    justify-content:center;
    left:50%;
    padding:2rem .5rem;
    position:fixed;
    row-gap:2rem;
    top:5rem;
    transform:translateX(-50%);
    width:50rem;
    z-index:9999999999999;
    user-select:none;
    & > span{
        align-items:center;
        background:white;
        border-radius:50%;
        color:#80B918;
        display:flex;
        font-size:4rem;
        height:5.5rem;
        justify-content:center;
        transition:.2s linear color;
        width:5.5rem;
    }
    & > p{
        color:white;
        font-size:1.8rem;
        font-weight:700;
    }
`
export const ButtonWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    & > button{
        border:.2rem solid red;
        border-radius:3rem;
        color:red;
        cursor:pointer;
        font-size:2.1rem;
        padding:1.25rem 3.5rem;
        transition:.2s linear background-color,.2s linear color,.2s linear transform;
        &:focus,
        &:hover{
            background-color:red;
            color:white;
            transform:scaleX(.95);
        }
    }
`
export const Field = styled.div`
    align-items:start;
    display:flex;
    flex-flow:column;
    justify-content:center;
    & > *,
    & > * > *{
        width:100%;
    }
    & > label{
        font-size:2.1rem;
        font-weight:700;
        padding:.5rem .75rem;
    }
`
export const FieldWrapper = styled(Field)`
    & > div{
        height:4rem;
        position:relative;
        & > input{
            cursor:pointer;
            font-size:1.9rem;
            font-weight:500;
            height:100%;
            padding:0 1rem;
            text-align:center;
            transition:.2s linear background-color;
            &:focus + span,
            &:hover + span{
                background-color:#000;
            }
            &:valid{
                background-color:palegreen;
            }
            &:valid + span{
                background-color:none;
            }
        }
        & > span{
            background-color:#ddd;
            bottom:0;
            height:.2rem;
            left:0;
            position:absolute;
            transition:.2s linear background-color;
        }
    }
`
export const FormWrapper = styled.form`
    align-items:flex-start;
    /* background:pink; */
    display:flex;
    flex-flow:column;
    justify-content:center;
    margin:2rem auto;
    max-width:95%;
    row-gap:.75rem;
    padding:1rem 0;
    width:50rem;
    & > * {
        width:100%;
    }
`
export const MessageWrapper = styled(Field)`
    row-gap:.5rem;
    & > div{
        height:15rem;
        & > textarea{
            border:.2rem solid #000;
            cursor:pointer;
            font-size:1.9rem;
            font-weight:500;
            height:100%;
            padding:.85rem;
            resize:none;
            transition:.2s linear  background-color;
            &:valid{
                background-color:palegreen;
            }
        }
    }
`
export const SubjectWrapper = styled(Field)`
    & > div{
        /* background:lime; */
        position:relative;
        & > select{
            all:unset;
            border-bottom:.2rem solid #ddd;
            cursor:pointer;
            font-size:1.9rem;
            font-weight:500;
            padding:1rem 0;
            text-align:center;
            transition:.2s linear border-bottom;
            z-index:0;
            width:100%;
            &:focus,
            &:hover{
                border-bottom:.2rem solid #000;
            }
            & > option{
                all:unset;
                padding:1rem 0;
                &:focus,
                &:hover{
                    all:unset;
                    background:lime;
                }
            }
        }
    }

`