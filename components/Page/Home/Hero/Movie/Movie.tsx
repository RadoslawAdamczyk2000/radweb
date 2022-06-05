import { AnimatePresence,motion } from "framer-motion";
import Link from "next/link"
import { IntMovie } from "./interface";
import { MovieWrapper } from "./styles";
const Movie = ({button,children,movie,path}:IntMovie) => {
    return(
        <MovieWrapper>
            <video
                autoPlay
                loop
                src={movie}
            />
            <div className='grid'>
                <div className='content'>
                    <section>
                        <AnimatePresence>
                            <motion.h1
                                initial={{
                                    opacity:0,
                                    y:40,
                                    visibility:'hidden'
                                }}
                                animate={{
                                    opacity:1,
                                    y:0,
                                    visibility:'visible'
                                }}
                                exit={{
                                    opacity:0,
                                    y:40,
                                    visibility:'hidden'
                                }}
                                transition={{
                                    duration:2,
                                    type:'spring'
                                }}
                            >
                                {children}
                            </motion.h1>
                        </AnimatePresence>
                        <div>
                            <Link href={path}>
                                <a>
                                    {button}
                                </a>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </MovieWrapper>
    )
}
export default Movie;