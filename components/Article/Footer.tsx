import Link from "next/link"
import { FooterWrapper } from "./styles";
const Footer = ({recent}:{recent:any[]}) => {
    return(
        <FooterWrapper>
            <h3>Zobacz pozostałe artykuły</h3>
            <ul>
                {recent.map(({path,title}:{path:string,title:string},key:number) =>
                    <li key={key}>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </FooterWrapper>
    )
}
export default Footer;