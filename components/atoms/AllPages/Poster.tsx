import Image from "next/image";
import { PosterWrapper } from "./styles/PosterWrapper";
interface i{
    altImage : string,
    image : string,
    isHero ?: boolean,
}
const Poster = ({altImage,image,isHero=false}:i) => {
    return(
        <>
            {
                isHero &&
                <PosterWrapper isHero={true}>
                    <Image
                        alt={altImage}
                        layout="fill"
                        objectFit='cover'
                        src={image}
                        objectPosition='center'
                        priority
                    />
                </PosterWrapper>
            }
        </>
    )
}
export default Poster;