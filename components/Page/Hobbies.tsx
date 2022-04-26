import { IntHobbies } from "../../types/interface";
import { HobbiesWrapper } from "./styles";
const Hobbies = ({hobbies}:IntHobbies) => {
    return(
        <HobbiesWrapper>
            {hobbies.map(({icon,title},key) =>
                <li key={key}>
                    <span>
                        {icon}
                    </span>
                    <p>{title}</p>
                </li>
            )}
        </HobbiesWrapper>
    )
}
export default Hobbies;