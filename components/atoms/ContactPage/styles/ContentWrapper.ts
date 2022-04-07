import { motion } from 'framer-motion';
import styled from 'styled-components';
export const ContentWrapper = styled(motion.article)`
    margin:8rem auto;
    max-width:75%;
    width:55rem;
    & > h1{
        color:${({theme}) => theme.colors.color};
        font-size:4rem;
        line-height:7rem;
    }
    & > p{
        color:${({theme}) => theme.colors.primary};
        font-size:1.9rem;
        line-height:3rem;
        text-align:start;
    }
`