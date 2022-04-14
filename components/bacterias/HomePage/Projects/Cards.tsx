import { posts } from "../../../../data/posts";
import Card from "../../../atoms/HomePage/Projects/Card";
import { CardsWrapper } from "./styles/CardsWrapper";

const Cards = () => {
    const {projects} = posts;
    return(
        <CardsWrapper>
            <Card
                button="Przeczytaj"
                content={projects[projects.length - 1].excerpt}
                path={projects[projects.length - 1].path}
                title={projects[projects.length - 1].title}
            />
            {/* <Card
                button="Przeczytaj"
                content={projects[projects.length - 1].excerpt}
                path={projects[projects.length - 1].path}
                title={projects[projects.length - 1].title}
            /> */}
        </CardsWrapper>
    )
}
export default Cards;