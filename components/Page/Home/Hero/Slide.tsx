import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IntSlideHomePage } from "../../../../types/interface";
import { SlideWrapper } from "./styles";
const Slide = ({button,content,image,link,title}:IntSlideHomePage) => {
    return(
        <AnimatePresence>
            <SlideWrapper
                initial={{opacity:0,visibility:'hidden'}}
                animate={{opacity:1,visibility:'visible'}}
                exit={{opacity:0,visibility:'hidden'}}
            >
                <div className='content'>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {content}
                    </p>
                    <Link href={link}>
                        <a>
                            {button}
                        </a>
                    </Link>
                </div>
                <div className='image'>
                    <div>
                        <motion.div
                            initial={{opacity:0,visibility:'hidden'}}
                            animate={{opacity:1,visibility:'visible'}}
                            exit={{opacity:0,visibility:'hidden'}}
                        >
                            <figure>
                                <Image
                                    alt={title}
                                    layout='fill'
                                    objectFit='contain'
                                    objectPosition='center'
                                    src={image}
                                    title={title}
                                />
                            </figure>
                        </motion.div>
                    </div>
                </div>
            </SlideWrapper>
        </AnimatePresence>
    )
}
export default Slide;
