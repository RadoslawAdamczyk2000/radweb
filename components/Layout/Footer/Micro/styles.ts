import styled from 'styled-components';
export const ContactWrapper = styled.address`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    gap:1rem;
    justify-content:flex-start;
    padding:1rem 2.25rem;
`
export const ContactItemWrapper = styled.li`
    height:4.5rem;
    transition:.2s linear background-color, .2s linear transform;
    width:4.5rem;
    &,
    & > a{
        align-items:center;
        display:flex;
        justify-content:center;
    }
    & > a {
        font-size:3rem;
        height:100%;
        width:100%;
    }
    &:focus,
    &:hover{
        transform:scale(.95);
    }
`
export const MicroWrapper = styled.div`
    & > article{
        padding:.25rem;
        & > h4{
            font-size:2.2rem;
        }
        & > p{
            font-size:1.75rem;
            line-height:calc(1.75rem * 2);
        }
    }
`