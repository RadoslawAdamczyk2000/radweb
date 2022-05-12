import Link from "next/link"
import { IntSocial } from "../../../../types/interface";
import { SocialWrapper } from "./styles";
const Social = ({icon,link,name}:IntSocial) => {
    return(
        <SocialWrapper title={name}>
            <Link href={link}>
                <a target='_blank' rel='noopener noreferrer index follow'>
                    <span>
                        {icon}
                    </span>
                </a>
            </Link>
        </SocialWrapper>
    )
}
export default Social;