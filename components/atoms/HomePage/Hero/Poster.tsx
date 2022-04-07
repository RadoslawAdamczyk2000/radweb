import Image from "next/image"
import { PosterWrapper } from "./styles/PosterWrapper";
interface i {
    path: string,
    title : string
}
const Poster = ({path,title}:i) => {
    return(
        <PosterWrapper>
            <Image
                src={path}
                alt={title}
                priority
                quality={100}
                layout='fill'
                style={{
                    borderRadius:'3.5rem',
                }}
                objectFit="cover"
                objectPosition='center'
            />
        </PosterWrapper>        
    )
}
export default Poster;