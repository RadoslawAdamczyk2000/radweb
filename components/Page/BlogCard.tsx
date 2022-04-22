import Image from "next/image"
import Link from "next/link"
import { IntBlogCard } from "../../types/interface"
const BlogCard = ({date,image,isHome,path,title}:IntBlogCard) => {
    return(
        <li>
            <Link href={path}>
                <a>
                    <figure>
                        <Image
                            alt={`${title} - zdjęcie`}
                            layout='fill'
                            loading='lazy'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                            quality={65}
                        />
                    </figure>
                    <figcaption>
                        <p>{date}</p>
                        {
                            isHome ? 
                            <h3>{title}</h3>:
                            <h4>{title}</h4>
                        }
                    </figcaption>
                </a>
            </Link>
        </li>
    )
}
export default BlogCard;