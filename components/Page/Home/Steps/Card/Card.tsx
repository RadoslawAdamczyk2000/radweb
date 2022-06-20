import { IntCard } from "./interface"
const Card = ({content,number,title}:IntCard) => {
    const int:number = number + 1;
    return(
        <li>
            <div>
                <p>
                    {int < 10 ? `0${int}` : int}
                </p>
            </div>
            <section>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{__html:content}} />
            </section>
        </li>
    )
}
export default Card;