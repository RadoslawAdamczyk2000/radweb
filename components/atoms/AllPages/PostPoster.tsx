import Image from "next/image"
import { PostPosterWrapper } from "./styles/PostPosterWrapper";
interface i {
    alt:string,
    image:string
}
const PostPoster = ({alt,image}:i) => {
    return(
        <PostPosterWrapper>
            <Image
                alt={alt}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                src={image}
                style={{
                    borderRadius:'2rem'
                }}
            />
        </PostPosterWrapper>
    )
}
export default PostPoster;