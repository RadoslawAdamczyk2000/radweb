import Link from "next/link"
import { ReactElement } from "react";
import { IntProjectCard } from "../../../../types/interface";
import { CardWrapper } from "./styles";
const Card = ({content,link,stack,title}:IntProjectCard) => {
    return(
        <CardWrapper title={title}>
            <Link href={link}>
                <a>
                    <h2 className="title">
                        {title}
                    </h2>
                    <ul className="stack">
                        {
                            stack.map(({icon,title}:{icon:ReactElement,title:string},key:number) =>
                                <li title={title} key={key}>
                                    {icon}
                                </li>
                            )
                        }
                    </ul>
                    <p>
                        {content.substr(0,280)}...
                    </p>
                </a>
            </Link>
        </CardWrapper>
    )
}
export default Card;