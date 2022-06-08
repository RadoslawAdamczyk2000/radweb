import Link from "next/link"
import { IntSocial } from "./interface";
import { SocialWrapper } from "./styles";
const Social = ({icon,path,title}:IntSocial) => {
    return(
        <SocialWrapper title={title}>
            <Link href={path}>
                <a title={title}>
                    <p>
                        {icon}
                    </p>
                </a>
            </Link>
        </SocialWrapper>
    )
}
export default Social;