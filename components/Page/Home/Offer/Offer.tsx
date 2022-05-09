import Link from "next/link";
import Card from "./Card";
import { OfferWrapper } from "./styles";

const Offer = () => {
    return(
        <OfferWrapper>
            <article>
                <h2>
                    Oferty
                </h2>
                <p>
                    Jestem młodym twórcą oraz pozycjonerem stron oraz aplikacji internetowych o sporym wachlarzu technologicznym, dlatego też znajdę odpowiednie rozwiązenie dla Twoich wymagań oraz problemów. 
                    <br/>
                    <br/>
                    Doskonale wiem jak powinna działać oraz wyglądać nowoczesna strona internetowa oraz co powinna zawierać aby była przyjazna przeglądarkom. Jednak to jest jedynie namiastka tego co oferuję, więc jeśli zainteresowała Ciebie moja osoba zapraszam do sprawdzenia wszystkich ofert.
                </p>
                <Link href='/oferty'>
                    <a>
                        Poznaj wszystkie
                    </a>
                </Link>
            </article>
            <ul>
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={0}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Strony internetowe"
                />
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={1}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Pozycjonowanie stron"
                />
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={2}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Optymalizacja stron"
                />
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={3}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Analiza stron"
                />
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={4}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Blogi"
                />
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={5}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Strony wizytówkowe"
                />
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={6}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Portfolio"
                />
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={7}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Strony wizytówkowe"
                />
                <Card
                    content="Non unde asperiores et sunt officiis enim rerum. Libero explicabo et. Perferendis perferendis adipisci magni atque consequatur error veniam. Fugiat fugit accusantium perspiciatis. Possimus enim totam dolores accusantium dolore repellendus.a asd asdas"
                    id={8}
                    image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                    link='/'
                    title="Strony firmowe"
                />
            </ul>
        </OfferWrapper>
    )
}
export default Offer;