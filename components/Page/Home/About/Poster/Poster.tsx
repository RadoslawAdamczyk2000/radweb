import Image from "next/image"
import { IntPoster } from "./interface";
import { PosterWrapper } from "./styles";
const Poster = ({image,title}:IntPoster) => {
    return(
        <PosterWrapper>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title={title}
                    quality={75}
                />
            </figure>
        </PosterWrapper>
    )
}
export default Poster;