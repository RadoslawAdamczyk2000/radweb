import styled from 'styled-components';
interface tag {
    active:boolean;
}
export const Tags = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:row wrap;
    gap:.25rem;
    justify-content:space-evenly;
    padding:1rem 1.25rem;
`
export const TagWrapper = styled.li<tag>`
    align-items:center;
    border:${({active}) => active && '.25rem solid red'};
    border-radius:.65rem;
    cursor:pointer;
    display:flex;
    font-size:3rem;
    height:4.25rem;
    justify-content:center;
    transition:.15s linear border;
    width:4.25rem;
    & > *{
        color:${({active}) => active && 'red'};
        transition:.15s linear color, .15s linear transform;
    }
    &:focus,
    &:hover{
        & > * {
            transform:scale(.9);
        }
    }
`