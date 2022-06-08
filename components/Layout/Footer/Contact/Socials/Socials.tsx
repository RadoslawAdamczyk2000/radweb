import { socials } from "../../../../../data/socials"
import Social from "../Social/Social"
const Socials = () => {
    return(
        <ul>
            {socials.map(({icon,path,title},key:number ) =>
                <Social
                    icon={icon}
                    key={key}
                    path={path}
                    title={title}
                />
            )}
        </ul>
    )
}
export default Socials;