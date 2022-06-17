import Image from "next/image"
import Link from "next/link"
import { IntBlogCard } from "./interface";
import { BlogCardWrapper } from "./styles";
const BlogCard = ({categoryName,categoryPath,date,image,path,title}:IntBlogCard) => {
    return(
        <BlogCardWrapper title={`${title} - ${categoryName}`}>
            <Link href={path}>
                <a>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                            title={`${title} - ${categoryName}`}
                            quality={50}
                        />
                    </figure>
                    <figcaption>
                        <div className='title'>
                            <h3>
                                {title}
                            </h3>
                        </div>
                        <div className='info'>
                            <div className="author">
                                <figure>
                                    <Image
                                        alt=''
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center'
                                        src='/assets/images/wall.jpg'
                                        quality={40}
                                    />
                                </figure>
                                <figcaption>
                                    <p>
                                        Radosław Adamczyk
                                    </p>
                                </figcaption>
                            </div>
                            <div className="details">
                                <div className='category'>
                                    <Link href={categoryPath}>
                                        <a>
                                            {categoryName}
                                        </a>
                                    </Link>
                                </div>
                                <div className='date'>
                                    <p>{date}</p>
                                </div>
                            </div>
                        </div>
                        
                    </figcaption>
                </a>
            </Link>
        </BlogCardWrapper>
    )
}
export default BlogCard;