import Image from "next/image"
import { HeroWrapper, MenuWrapper } from "./styles";
const Hero = () => {
    return(
        <>
            <HeroWrapper>
                <figure>
                    <Image
                        alt='O mnie - kim jestem '
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        src='https://images.unsplash.com/photo-1600267185393-e158a98703de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        title='O mnie - kim jestem '
                        quality={75}
                    />
                </figure>
                <div>
                    <h1>Radosław Adamczyk</h1>
                    <p>Nazywam się Radosław Adamczyk, znany w internecie jako RadWEB i urodziłem się 9 października 2000 roku. Już od najmłodszych lat interesuję się wszystkim co jest związane ze stronami internetowymi. W sposób świadomy rozpocząłem przygodę z tym światem w 2016 roku kiedy to napisałem swoją pierwszą prostą stronę internetową w Notatniku. Dziś mój wachalrz umiejętności znacznie się rozszerzyły czego dowodem są blog i projekty.</p>
                </div>
            </HeroWrapper>
            <MenuWrapper>
                <ul>
                    <li>
                        <a href="#zyciorys">
                            Życiorys
                        </a>
                    </li>
                    <li>
                        <a href="#edukacja">
                            Edukacja
                        </a>
                    </li>
                    <li>
                        <a href="#umiejetnosc">
                            Umiejętności
                        </a>
                    </li>
                    <li>
                        <a href="#pasje-i-zainteresowania">
                            Pasje i zainteresowania
                        </a>
                    </li>
                </ul>
            </MenuWrapper>
        </>
    )
}
export default Hero;