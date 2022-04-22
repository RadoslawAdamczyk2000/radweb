import Image from "next/image"
import Link from "next/link"
import { IntOfferCard } from "../../types/interface";
import { OfferCardHomeWrapper } from "./styles";
const OfferCard = ({content,image='',isHome,path,title}:IntOfferCard) => {
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
                <li>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <Link href={path}>
                        <a rel='index follow'>
                            Sprawdź
                        </a>
                    </Link>
                </li>
            }
        </>
    )
}
export default OfferCard;