import { HobbiesWrapper } from "./styles/HobbiesWrapper";

interface i {
    hobbies : Array<any>
}
const Hobbies = ({hobbies}:i) => {
    return(
        <HobbiesWrapper>
            {hobbies.map(({icon,title}) =>
                <li
                    key={title}
                >
                    <i>{icon}</i>
                    <p>{title}</p>
                </li>
            )}
        </HobbiesWrapper>
    )
}
export default Hobbies;