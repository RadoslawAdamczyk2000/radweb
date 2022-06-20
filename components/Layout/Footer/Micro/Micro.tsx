import Link from "next/link"
import { footer } from "../../../../data/footer"
import { Wrapper } from "./styles";
const Micro = () => {
    const {author,mail,phone,place,url} = footer.micro;
    return(
        <Wrapper>
            <address>
                <h3 className='url'>{url}</h3>
                <h3 className='author'>{author}</h3>
                <p className='place' dangerouslySetInnerHTML={{__html:place}} />
                <Link href={phone.path}>
                    <a className='button'>
                        {phone.title}
                    </a>
                </Link>
                <Link href={mail.path}>
                    <a className='button'>
                        {mail.title}
                    </a>
                </Link>
            </address>
        </Wrapper>
    )
}
export default Micro;