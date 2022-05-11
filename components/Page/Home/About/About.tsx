import Image from "next/image"
import Link from "next/link"
import { AboutWrapper } from "./styles";
const About = () => {
    return(
        <AboutWrapper>
            <figure>
                <Image
                    alt='Radosław Adamczyk - RadWEB'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src='/assets/images/tower.webp'
                    title='Radosław Adamczyk - RadWEB'
                    quality={95}
                />
            </figure>
            <article>
                <h2>Kim jestem?</h2>
                <p>Nazywam się Radosław Adamczyk i urodziłem się 9 października 2000 roku. Jestem absolwentem KPALO w Śremie o profilu matematyczno-fizyczno-informatyczno-historycznym, który w głównej mierze odzwierciedla moje zainteresowania. Od 2016 roku wskoczyłem do świata tworzenia stron internetowych, i od tamtego momentu codziennie uczę się nowości ze świata webu.</p>
                <Link href='/o-mnie'>
                    <a>
                        Dowiedz się więcej
                    </a>
                </Link>
            </article>
        </AboutWrapper>
    )
}
export default About;