import Image from "next/image"
import { PosterWrapper } from "./styles/PosterWrapper";
interface i {
    image : string,
    imageTitle : string
}
const Poster = ({image,imageTitle}:i) => {
    return(
        <PosterWrapper>
            <Image
                alt={imageTitle}
                layout='fill'
                objectFit='contain'
                objectPosition='center'
                src={image}
            />
        </PosterWrapper>
    )
}
export default Poster;