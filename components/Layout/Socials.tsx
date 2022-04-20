import Link from "next/link";
import { footer } from "../../data/footer"
import { SocialsWrapper } from "./styles";
const Socials = () => {
    const {socials} = footer;
    return(
        <SocialsWrapper>
            {socials.map(({icon,path,title},key) =>
                <li className='social' key={key} title={title}>
                    <Link href={path}>
                        <a
                            target='_blank'
                            rel='noreferrer index follow'
                            title={title}
                        >
                            {icon}
                        </a>
                    </Link>
                </li>
            )}
        </SocialsWrapper>
    )
}
export default Socials;