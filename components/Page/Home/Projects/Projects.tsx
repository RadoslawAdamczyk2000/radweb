import Link from "next/link";
import { stack } from "../../../../data/stack";
import Card from "./Card";
import { ProjectsWrapper } from "./styles";

const Projects = () => {
    return(
        <ProjectsWrapper>
            <article>
                <h2>Projekty</h2>
                <p>Doskonale wiem jak powinna działać oraz wyglądać nowoczesna strona internetowa oraz co powinna zawierać aby była przyjazna przeglądarkom. Jednak to jest jedynie namiastka tego co oferuję, więc jeśli zainteresowała Ciebie moja osoba zapraszam do sprawdzenia wszystkich ofert.</p>
                
            </article>
            <div>
                <ul className="top">
                    <Card
                        content="Jestem młodym programistą z codziennie rosnącym bagażem doświadczeń w świecie programowania i marketingu stron internetowych w wyszukiwarce Google. Podążam za aktualnymi trendami oraz czerpię wiedzę od renomowanych autorytetów w branży."
                        image="https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_960_720.jpg"
                        isBig={true}
                        link='/'
                        stack={[stack.react,stack.next,stack.gatsby]}
                        title='Borówkowy Gaj'
                    />
                    <Card
                        content="Jestem młodym programistą z codziennie rosnącym bagażem doświadczeń w świecie programowania i marketingu stron internetowych w wyszukiwarce Google. Podążam za aktualnymi trendami oraz czerpię wiedzę od renomowanych autorytetów w branży."
                        image="https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_960_720.jpg"
                        isBig={true}
                        link='/'
                        stack={[stack.react,stack.next,stack.gatsby]}
                        title='Borówkowy Gaj'
                    />
                </ul>
                <ul className="bottom">
                    <Card
                        content="Jestem młodym programistą z codziennie rosnącym bagażem doświadczeń w świecie programowania i marketingu stron internetowych w wyszukiwarce Google. Podążam za aktualnymi trendami oraz czerpię wiedzę od renomowanych autorytetów w branży."
                        image="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_960_720.jpg"
                        isBig={false}
                        link='/'
                        stack={[stack.react,stack.next,stack.gatsby]}
                        title='Borówkowy Gaj'
                    />
                    <Card
                        content="Jestem młodym programistą z codziennie rosnącym bagażem doświadczeń w świecie programowania i marketingu stron internetowych w wyszukiwarce Google. Podążam za aktualnymi trendami oraz czerpię wiedzę od renomowanych autorytetów w branży."
                        image="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_960_720.jpg"
                        isBig={false}
                        link='/'
                        stack={[stack.react,stack.next,stack.gatsby]}
                        title='Borówkowy Gaj'
                    />
                    <Card
                        content="Jestem młodym programistą z codziennie rosnącym bagażem doświadczeń w świecie programowania i marketingu stron internetowych w wyszukiwarce Google. Podążam za aktualnymi trendami oraz czerpię wiedzę od renomowanych autorytetów w branży."
                        image="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_960_720.jpg"
                        isBig={false}
                        link='/'
                        stack={[stack.react,stack.next,stack.gatsby]}
                        title='Borówkowy Gaj'
                    />
                </ul>
            </div>
            <div>
                <Link href='/'>
                    <a>
                        Zobacz wszystkie
                    </a>
                </Link>
            </div>
        </ProjectsWrapper>
    )
}
export default Projects;