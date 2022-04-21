import { IntHeroPage } from "../../types/interface"
const Hero = ({content,isHome,title}:IntHeroPage) => {
    return(
        <>
            {
                isHome ?
                <header className='home'>
                    <section>
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </section>
                </header> :
                <header>

                </header>
            }
        </>
    )
}
export default Hero;