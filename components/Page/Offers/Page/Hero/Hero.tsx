import { IntHeroLocation } from "../../../../../types/interface";
import { HeroWrapper } from "../Content/styles";
const Hero = ({city,dat,loc}:IntHeroLocation) => {
    return(
        <HeroWrapper>
            <section>
                <h1>{city}</h1>
                <p>Postaw na kompleksowe i najlepsze rozwiązania w zakresie tworzenia stron internetowytch w {loc} i okolicach {dat}. Zarówno zaprojektuję jaki stworzę stronę z użyciem rekomendowanych narzędzi. W dalszej kolejności zrealizuję prace SEO, aby Twoja strona była najczęściej wyświetlaną w {loc}. Na koniec zainstaluję narzędzia analityczne do stron w {loc}</p>
            </section>
        </HeroWrapper>
    )
}
export default Hero;