import styled from 'styled-components';
export const CardWrapper = styled.li`
    align-items:center;
    background-color:#ddd;
    border-radius:.75rem;
    cursor:default;
    display:flex;
    flex-flow:column;
    justify-content:center;
    padding:2rem 0;
    row-gap:2rem;
    transition:.2s linear background-color;
    width:35rem;
    & > .index{
        align-items:center;
        display:flex;
        font-size:3rem;
        font-weight:700;
        height:5rem;
        width:5rem;
        justify-content:center;
        transition:.2s linear font-size,.2s linear transform;
        user-select:none;
        &::after{
            border: .75rem solid gray;
            height: 5rem;
            transform:rotate(-90deg);
            width: 5rem;
        }
        &::before{
            border: .95rem solid black;
            height: 5.25rem;
            transform:rotate(90deg);
            width: 5.25rem;
        }
        &::after,
        &::before{
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-radius: 50%;
            transition:.2s linear transform;
        }
    }
    & > .company{
        font-size:2.4rem;
        font-weight:600;
        transition:.2s linear color;
    }
    & > .position{
        font-size:1.8rem;
        font-weight:600;
    }
    & > .description{
        font-size:1.65rem;
        line-height:calc(1.65rem * 2);
        padding:.5rem 1rem;
        text-align:center;
    }
    &:focus,
    &:hover{
        background-color:#ededed;
        & > .index{
            font-size:3.2rem;
            transform:scale(.85);
            &::after{
                transform:rotate(-180deg);
            }
            &::before{
                transform:rotate(0deg);
            }
        }
        & > .company{
            color:red;
        }
    }
`
export const CardsWrapper = styled.ul`
    align-items:start;
    display:flex;
    flex-flow:row wrap;
    gap:2rem;
    justify-content:center;
`