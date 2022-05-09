import Image from "next/image"
import Link from "next/link";
import { IntOfferCardHome } from "../../../../types/interface";
import { CardWrapper } from "./styles";
const Card  = ({content,id,image,link,title}:IntOfferCardHome) => {
    return(
        <CardWrapper title={title}>
            <Link href={link}>
                <a>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='50% 50%'
                            src={image}
                            quality={50}
                            style={{
                                opacity:.75
                            }}
                        />
                    </figure>
                    <figcaption>
                        <div>
                            <span>0{id + 1}</span>
                            <h3>{title}</h3>
                            <p>{content}</p>
                        </div>
                    </figcaption>
                </a>
            </Link>
        </CardWrapper>
    )
}
export default Card;