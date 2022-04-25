import Image from "next/image"
import Link from "next/link"
import { IntOfferCard } from "../../types/interface";
import { OfferCardHomeWrapper, OfferCardWrapper } from "./styles";
const OfferCard = ({button,content,image='',isHome,path='',price,title}:IntOfferCard) => {
    return(
        <>
            {
                isHome ?
                <OfferCardHomeWrapper>
                    <figure>
                        <Image
                            alt={`${title} - oferta RadWEB - zdjęcie`}
                            layout='fill'
                            loading='lazy'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                        />
                    </figure>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <Link href={path}>
                        <a rel='index follow'>
                            Sprawdź
                        </a>
                    </Link>
                </OfferCardHomeWrapper>:
                <OfferCardWrapper>
                    <h2>{title}</h2>
                    <p className="content">{content}</p>
                    {price && <p className="price">{price}</p>}
                    {button && <Link href={path}>
                        <a rel='index follow'>
                            Sprawdź
                        </a>
                    </Link>}
                </OfferCardWrapper>
            }
        </>
    )
}
export default OfferCard;