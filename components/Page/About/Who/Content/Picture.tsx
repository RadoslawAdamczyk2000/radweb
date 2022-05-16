import Image from "next/image"
import { IntPictureAbout } from "../../../../../types/interface";
import { PictureWrapper } from "./styles";
const Picture = ({image,title}:IntPictureAbout) => {
    return(
        <PictureWrapper>
            <Image
                alt={title}
                layout='fill'
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