import Image from "next/image"
import Link from "next/link"
import {RiTimeLine} from 'react-icons/ri';
import { CardWrapper } from "./styles/CardWrapper";
interface i {
    date : string,
    image : string,
    path : string,
    time : number | string,
    title : string
}
const Card = ({date,image,path,time,title}:i) => {
    return(
        <Link href={path}>
            <a>
                <CardWrapper>
                    <figure>
                        <Image
                            alt={`${title} - image`}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                            style={{
                                borderRadius:'2rem',
                                maxWidth:'95%'
                            }}
                        />
                    </figure>
                    <figcaption>
                        <p>{date} - <i><RiTimeLine/></i>{time}min</p>
                        <h5>{title}</h5>
                    </figcaption>
                </CardWrapper>
            </a>
        </Link>
    )
}
export default Card;