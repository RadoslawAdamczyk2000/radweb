import { stack } from "../../../../../data/stack"
import Card from "../../../../All/Projects/Card/Card"
import Content from "../Content/Content"
import { CardsWrapper } from "./styles"
const Projects = () => {
    return(
        <section>
            <Content
                button="Poznaj wszystkie"
                content="Tworzeniem stron oraz aplikacji internetowych zajmuję się już od 2016 roku. Natomiast na poziom komercyjny wkroczyłem na przełomie 2020/2021 roku, kiedy to zacząłem zbierać pierwsze zamówienia. Dlaczego projekty są tak istotne? Niezależnie od tego, czy to realizacja prywatna lub komercyjna, to projekty prezentują rozwój developera."
                image="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                path="#"
                title="Projekty"
            />
            <CardsWrapper>
                <Card
                    excerpt="Każdy postawia swój pierwszy krok na rynku. Moim pierwszym krokiem była strona zrealizowana dla Borókowego Gaju - gospodarstwa, które należy do ojca mojego kolegi. Niedługo minie rok od zrealizowania tej strony. Dziś napewno napisałbym lepiej tą stronę, jednak z perspektywy pozycjonera statystyki są idealne."
                    image="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    path="#"
                    stack={[stack.html.icon,stack.css.icon,stack.next.icon]}
                    title="Borówkowy Gaj"
                />
                <Card
                    excerpt="Każdy postawia swój pierwszy krok na rynku. Moim pierwszym krokiem była strona zrealizowana dla Borókowego Gaju - gospodarstwa, które należy do ojca mojego kolegi. Niedługo minie rok od zrealizowania tej strony. Dziś napewno napisałbym lepiej tą stronę, jednak z perspektywy pozycjonera statystyki są idealne."
                    image="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    path="#"
                    stack={[stack.html.icon,stack.css.icon,stack.next.icon]}
                    title="Borówkowy Gaj"
                />
                <Card
                    excerpt="Każdy postawia swój pierwszy krok na rynku. Moim pierwszym krokiem była strona zrealizowana dla Borókowego Gaju - gospodarstwa, które należy do ojca mojego kolegi. Niedługo minie rok od zrealizowania tej strony. Dziś napewno napisałbym lepiej tą stronę, jednak z perspektywy pozycjonera statystyki są idealne."
                    image="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    path="#"
                    stack={[stack.html.icon,stack.css.icon,stack.next.icon]}
                    title="Borówkowy Gaj"
                />
                <Card
                    excerpt="Każdy postawia swój pierwszy krok na rynku. Moim pierwszym krokiem była strona zrealizowana dla Borókowego Gaju - gospodarstwa, które należy do ojca mojego kolegi. Niedługo minie rok od zrealizowania tej strony. Dziś napewno napisałbym lepiej tą stronę, jednak z perspektywy pozycjonera statystyki są idealne."
                    image="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    path="#"
                    stack={[stack.html.icon,stack.css.icon,stack.next.icon]}
                    title="Borówkowy Gaj"
                />
            </CardsWrapper>
        </section>
    )
}

export default Projects;