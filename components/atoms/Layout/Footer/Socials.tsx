import Link from "next/link";
import { footer } from "../../../../data/footer";
import { SocialsWrapper } from "./styles/SocialsWrapper";
const Socials = () => {
    const {socials} = footer;
    return(
        <SocialsWrapper>
            {
                socials.map(({icon,path,title}) =>
                    <li title={title} key={`${path}${title}`}>
                        <Link href={path}>
                            <a target='_blank'>
                                {icon}
                            </a>
                        </Link>
                    </li>
                )
            }
        </SocialsWrapper>
    )
}
export default Socials;