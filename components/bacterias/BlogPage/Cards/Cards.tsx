import fs from "fs";
import Card from "../../../atoms/HomePage/Blog/Card";
import { CardsWrapper } from "./styles/CardsWrapper";
const Cards = () => {
    return(
        <CardsWrapper>
            <Card
                date="Sun Apr 10 2022 23:21:16 GMT+0200 (czas środkowoeuropejski letni)"
                image="http://placeimg.com/640/480"
                path="/blog/narzedzia-dla-developera"
                time={34}
                title="Dynamic Infrastructure Liaison"
            />
        </CardsWrapper>
    )
}
export default Cards;

// export const getStaticProps = async () => {
//     const files = fs.readdirSync(path.join('blog','articles'));
//     const posts = files.map(filename => {
//         const mdMeta = fs.readFileSync(path.join('blog','articles',filename));
//     })
//     console.log(posts);
//     return posts;
// }