import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IntSlideHomePage } from "../../../../types/interface";
import { SlideWrapper } from "./styles";
const Slide = ({button,content,image,isMain,link='',title}:IntSlideHomePage) => {
    return(
        <AnimatePresence>
            <SlideWrapper
                initial={{opacity:0,visibility:'hidden',x:-100}}
                animate={{opacity:1,visibility:'visible',x:0}}
                exit={{opacity:0,visibility:'hidden',x:100}}
            >
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        title={title}
                        quality={95}
                        priority
                        src={image}
                    />
                </figure>
                <figcaption>
                    {
                        isMain ?
                        <h1>{title}</h1> :
                        <h2>{title}</h2>
                    }
                    {
                        content && 
                        <p>{content}</p>
                    }
                    {
                        link &&
                        <Link href={link}>
                            <a>
                                {button}
                            </a>
                        </Link>
                    }
                </figcaption>
            </SlideWrapper>
        </AnimatePresence>
    )
}
export default Slide;