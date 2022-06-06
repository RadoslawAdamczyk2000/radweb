import Image from "next/image"
import Link from "next/link"
import { IntCard } from "./interface";
import { CardWrapper } from "./styles";
const Card = ({authorPath,category,categoryPath,date,excerpt,fullname,image,path,title}:IntCard) => {
    const dateFormatted = new Date(date);
    let day:string|number = dateFormatted.getDate();
    if(day < 10) {day = `0${day}`;}
    let month:string|number = dateFormatted.getMonth() + 1;
    if(month < 10) {month = `0${month}`;}
    const year:string|number = dateFormatted.getFullYear();
    const fullDate = `${day}-${month}-${year}`;
    return(
        <CardWrapper title={`${title} - ${category.toLocaleUpperCase()}`}>
            <Link href={path}>
                <a>
                    <figure>
                        <div>
                            <Image
                                alt={`${title} - ${category.toLocaleUpperCase()}`}
                                layout='fill'
                                loading='lazy'
                                src={image}
                                title={`${title} - ${category.toLocaleUpperCase()}`}
                                quality={55}
                            />
                        </div>
                    </figure>
                    <figcaption>
                        <h3  className="title">{title}</h3>
                        <p 
                            className="excerpt" 
                            dangerouslySetInnerHTML={{__html:excerpt.substr(0,120) + '...'}}
                        />
                        <div className="info">
                                <Link href={authorPath}>
                                    <a title={fullname}>
                                        {fullname}     
                                    </a>
                                </Link>
                                <div>
                                    <Link href={categoryPath}>
                                        <a title={category}>
                                            {category.toLowerCase()}
                                        </a>
                                    </Link>
                                    <p>{fullDate}</p>
                                </div>
                        </div>
                    </figcaption>
                </a>
            </Link>
        </CardWrapper>
    )
}
export default Card;