import { socials } from "../../../../../data/socials";
import Social from "../Social/Social";
import { Wrapper } from "./styles";
const Socials = () => {
    return(
        <Wrapper>
            <ul>
                {socials.map(({color,icon,path,title},key) =>
                    <Social
                        color={color}
                        icon={icon}
                        key={key}
                        path={path}
                        title={title}
                    />
                )}
            </ul>
        </Wrapper>
    )
}
export default Socials;