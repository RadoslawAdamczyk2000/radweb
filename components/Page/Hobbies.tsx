import { IntHobbies } from "../../types/interface";
const Hobbies = ({hobbies}:IntHobbies) => {
    return(
        <ul>
            {hobbies.map(({icon,title},key) =>
                <li key={key}>
                    <span>
                        {icon}
                    </span>
                    <p>{title}</p>
                </li>
            )}
        </ul>
    )
}
export default Hobbies;