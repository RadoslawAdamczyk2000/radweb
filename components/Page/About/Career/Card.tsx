import { IntCareerCard } from "../../../../types/interface";
import { CardWrapper } from "./styles";
const Card = ({company,description,end,index,job,start}:IntCareerCard) => {
    return(
        <CardWrapper>
            <span className="index">
                {   
                    index < 10?
                    `0${index}` :
                    index
                }
            </span>
            <h2 className="company">
                {company}
            </h2>
            <h3 className="position">
                {job}
            </h3>
            <p className="time">
                {start} - {end}
            </p>
            <p className="description">
                {description}
            </p>
        </CardWrapper>
    )
}
export default Card;