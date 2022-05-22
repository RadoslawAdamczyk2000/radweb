import Link from "next/link";
import { home } from "../../../../content/home";
import Card from "./Card";
import { OfferWrapper } from "./styles";

const Offer = () => {
    const {button,cards,content,title} = home.page.offers;
    return(
        <OfferWrapper>
            <article>
                <h2>{title}</h2>
                <p>{content}</p>
                <Link href={button.path}>
                    <a>
                        {button.title}
                    </a>
                </Link>
            </article>
            <ul>
                {
                    cards.map(({content,id,link,title},key) => 
                        <Card
                            content={content}
                            id={id}
                            image="https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096_960_720.jpg"
                            key={key}
                            link={link}
                            title={title}
                        />    
                    )
                }
            </ul>
        </OfferWrapper>
    )
}
export default Offer;