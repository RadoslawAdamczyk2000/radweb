import Image from "next/image"
import Link from "next/link"
import { home } from "../../../../content/home";
import { AboutWrapper } from "./styles";
const About = () => {
    const {button,content,image,title} = home.page.about;
    return(
        <AboutWrapper>
            <figure>
                <Image
                    alt='Radosław Adamczyk - RadWEB'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title='Radosław Adamczyk - RadWEB'
                    quality={95}
                />
            </figure>
            <article>
                <h2>{title}</h2>
                <p>{content}</p>
                <Link href={button.path}>
                    <a>
                        {button.title}
                    </a>
                </Link>
            </article>
        </AboutWrapper>
    )
}
export default About;