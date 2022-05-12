import { socials } from "../../../../data/socials"
import { IntSocial } from "../../../../types/interface"
import Social from "./Social"
import { SocialsWrapper } from "./styles"
const Socials = () => {
    return(
        <SocialsWrapper>
            {socials.map(({icon,link,name}:IntSocial,key:number) =>
                <Social
                    icon={icon}
                    key={key}
                    link={link}
                    name={name}
                />
            )}
        </SocialsWrapper>
    )
}
export default Socials;