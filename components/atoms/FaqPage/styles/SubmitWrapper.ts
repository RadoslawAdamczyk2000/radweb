import { motion } from 'framer-motion';
import styled from 'styled-components';
export const SubmitWrapper = styled(motion.button)`
    border-radius:5rem;
    box-shadow:inset 0 0 1rem hsla(0,100%,0%,.25);
    font-size:2.2rem;
    font-weight:700;
    padding:1.25rem 3.5rem;
    transition:.2s linear box-shadow,.2s linear filter;
    &:focus,
    &:hover{
        box-shadow:inset 0 0 0 hsla(0,100%,0%,.25);
        filter:drop-shadow(0 0 1rem hsla(0,100%,0%,.25));
    }
`