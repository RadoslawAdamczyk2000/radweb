import { motion } from 'framer-motion';
import styled from 'styled-components';
export const HeroWrapper = styled(motion.header)`
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-height:70rem;
    padding:2rem 0;
    position:relative;
    row-gap:2rem;
    & > * {
        max-width:75%;
        width:95rem;
    }
    & > article{
        & > * {
            padding:.75rem 2rem;
        }
        & > h1{
            color:${({theme}) => theme.colors.color};
            font-size:3.2rem;
            line-height:6rem;
        }
        & > p{
            color:${({theme}) => theme.colors.primary};
            font-size:1.95rem;
            line-height:3.5rem;
        }
    }
    & > figure{
        position:relative;
        height:45rem;
    }
`