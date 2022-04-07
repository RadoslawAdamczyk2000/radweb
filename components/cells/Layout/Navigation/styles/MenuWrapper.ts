import { motion } from 'framer-motion';
import styled from 'styled-components';
export const MenuWrapper = styled(motion.menu)`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    gap:1rem;
    height:100%;
    justify-content:center;
    width:100%;
    @media only screen and (max-width:980px){
        padding:1rem 0;
        flex-direction:column;
    }
`