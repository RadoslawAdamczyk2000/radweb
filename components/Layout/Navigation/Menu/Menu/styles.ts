import { motion } from 'framer-motion';
import styled from 'styled-components';
export const MenuWrapper = styled(motion.menu)`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    gap:0 .8rem;
    justify-content:flex-end;
    padding:0 .15rem;
    width:100%;
    @media only screen {
        @media (max-width:920px){
            gap:0 .25rem;
        }
        @media (max-width:840px){
            justify-content:center;
            padding:.25rem .15rem;
        }
        @media (max-width:680px){
            align-items:start;
            flex-flow:column;
            padding:1rem 1.5rem;
        }
    }
`