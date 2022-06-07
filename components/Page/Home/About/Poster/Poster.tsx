import Image from "next/image"
import { IntPoster } from "./interface";
import { PosterWrapper } from "./styles";
const Poster = ({alt,image}:IntPoster) => {
    return(
        <PosterWrapper>
            <figure>
                <Image
                    alt={alt}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title=''
                />
            </figure>
        </PosterWrapper>
    )
}
export default Poster;