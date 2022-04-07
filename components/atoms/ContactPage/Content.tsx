import { ContentWrapper } from "./styles/ContentWrapper";
import { motion } from 'framer-motion';
interface i {
    content : string,
    title : string
}
const Content = ({content,title}:i) => {
    return(
        <ContentWrapper
            initial={{opacity:0,visibility:'hidden'}}
            animate={{opacity:1,visibility:'visible'}}
            exit={{opacity:0,visibility:'hidden'}}
        >
            <motion.h1
                initial={{x:-10}}
                animate={{x:0}}
                exit={{x:10}}
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{x:-10}}
                animate={{x:0}}
                exit={{x:10}}
            >
                {content}
            </motion.p>
        </ContentWrapper>
    )
}
export default Content;