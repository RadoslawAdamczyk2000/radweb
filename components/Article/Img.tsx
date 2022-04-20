import Image from "next/image"
import { IntImgArticle } from "../../types/interface";
const Img = ({article,image,isMain,title}:IntImgArticle) => {
    return(
        <section>
            <figure className={isMain ? 'main' : 'regular'} >
                <Image
                    alt={`${article} - ${title} - zdjęcie`}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                />
            </figure>
            {title && <figcaption>{title}</figcaption>}
        </section>
    )
}
export default Img;