import { motion } from 'framer-motion';
import styled from 'styled-components';
export const HeroWrapper = styled(motion.header)`
    display:grid;
    grid-template-columns:2.5fr 3fr;
    min-height:70rem;
    & > div{
        align-items:center;
        display:flex;
        justify-content:center;
        &:first-of-type{
            flex-direction:column;
        }
    }
    @media only screen and (max-width:1200px){
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        row-gap:2rem;
    }
`