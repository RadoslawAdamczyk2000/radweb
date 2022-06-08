import { socials } from "../../../../../data/socials"
import Social from "../Social/Social"
import { SocialsWrapper } from "./styles";
const Socials = () => {
    return(
        <SocialsWrapper>
            {socials.map(({icon,path,title},key:number ) =>
                <Social
                    icon={icon}
                    key={key}
                    path={path}
                    title={title}
                />
            )}
        </SocialsWrapper>
    )
}
export default Socials;