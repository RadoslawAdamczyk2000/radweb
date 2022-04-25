import Image from "next/image"
import Link from "next/link"
import { IntBlogCard } from "../../types/interface"
import { BlogCardWrapper } from "./styles"
const BlogCard = ({date,image,isHome,path,title}:IntBlogCard) => {
    return(
        <BlogCardWrapper isHome={isHome}>
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
                            style={{
                                borderRadius:'1.2rem'
                            }}
                            quality={45}
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
        </BlogCardWrapper>
    )
}
export default BlogCard;