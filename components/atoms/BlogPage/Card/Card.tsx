import Image from "next/image"
import Link from "next/link"
import {RiTimeLine} from 'react-icons/ri';
import { CardWrapper } from "./styles/CardWrapper";
interface i {
    date : string,
    image : string,
    path : string,
    time : number,
    title : string
}
const Card = ({date,image,path,time,title}:i) => {
    const articleTime = new Date(date);
    const articleYear = articleTime.getFullYear();
    let articleMonth:number|string = articleTime.getMonth();
    if(articleMonth < 10){articleMonth = `0${articleMonth}`}
    let articleDay:number|string = articleTime.getDate();
    if(articleDay < 10){articleDay = `0${articleDay}`}
    const article:string = `${articleDay}/${articleMonth}/${articleYear}`;
    return(
        <Link href={path}>
            <a >
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
                        <p>{article} - <i><RiTimeLine/></i>{time}min</p>
                        <h5>{title}</h5>
                    </figcaption>
                </CardWrapper>
            </a>
        </Link>
    )
}
export default Card;