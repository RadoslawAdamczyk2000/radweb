import styled from 'styled-components';
import { motion } from 'framer-motion';
export const ButtonWrapper = styled(motion.button)`
    align-items:center;
    background-color:#f1f1f6;
    bottom:4rem;
    box-shadow:0 0 2rem hsla(0,100%,0%,.25),0 0 2rem hsla(0,100%,100%,.25);
    border-radius:50%;
    display:flex;
    font-size:3.5rem;
    height:4.5rem;
    justify-content:center;
    position:fixed;
    right:2rem;
    width:4.5rem;
    transition:.2s linear background-color,.2s linear transform;
    z-index:9999;
    &:hover{
        background-color:#fff;
        transform:scale(.9);
    }
`