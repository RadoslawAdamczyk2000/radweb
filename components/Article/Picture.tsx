import Image from "next/image"
import { PictureWrapper } from "./styles";

const Picture = ({image,title}:{image:string;title:string}) => {
    return(
        <PictureWrapper>
            <Image
                alt={title}
                layout='fill'
                loading='lazy'
                objectFit='cover'
                objectPosition='center'
                src={image}
                title={title}
                quality={65}
            />
        </PictureWrapper>
    )
}
export default Picture;