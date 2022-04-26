import Image from "next/image"
import Link from "next/link"
import { IntOfferCard } from "../../types/interface";
import { OfferCardHomeWrapper, OfferCardWrapper } from "./styles";
const OfferCard = ({button,content,isHome,path='',price,title}:IntOfferCard) => {
    return(
        <>
            {
                isHome ?
                <OfferCardHomeWrapper>
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