import Image from "next/image"
import { IntImgArticle } from "../../types/interface";
import { ImageWrapper } from "./styles";
const Img1 = ({image,isMain,title}:IntImgArticle) => {
    return(
        <ImageWrapper className={isMain ? 'main' : 'regular'}>
            <figure>
                <Image
                    alt={`${title} - zdjęcie`}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    style={{
                        borderRadius:'2rem'
                    }}
                    quality={isMain ? 85 : 55}
                />
            </figure>
        </ImageWrapper>
    )
}
export default Img1;