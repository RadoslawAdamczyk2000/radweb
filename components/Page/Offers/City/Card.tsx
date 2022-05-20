import Link from "next/link"
import { IntCityCard } from "../../../../types/interface"
import { CardWrapper } from "./styles";
const Card = ({city,link}:IntCityCard) => {
    return(
        <CardWrapper>
            <Link href={link}>
                <a>
                    <h2>{city}</h2>
                </a>
            </Link>
        </CardWrapper>
    )
}
export default Card;