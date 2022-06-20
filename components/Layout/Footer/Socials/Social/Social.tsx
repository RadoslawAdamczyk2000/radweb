import Link from "next/link"
import { IntSocial } from "./interface";
import { Wrapper } from "./styles";
const Social = ({color,icon,path,title}:IntSocial) => {
    return(
        <Wrapper color={color} title={title}>
            <Link href={path}>
                <a target='_blank' rel='index follow' title={title}>
                    {icon}
                </a>
            </Link>
        </Wrapper>
    )
}
export default Social;