import Link from 'next/link';
import { footer } from '../../../../data/footer';
import {navigation} from '../../../../data/navigation';
import { InfoWrapper } from './styles/InfoWrapper';
const Info = () => {
    const {menu} = navigation.pl;
    const {contact} = footer.pl;
    const {title,email,phone} = contact;
    return(
        <InfoWrapper>
            <div>
                <p>{title}</p>
                <address>
                    <Link href={email.href}><a>{email.name}</a></Link>
                    <Link href={phone.href}><a>{phone.name}</a></Link>
                </address>
            </div>
            <div>
                <p>Menu</p>
                <ul>
                    {menu.map(({path,title}) => 
                        <li key={title}><Link href={path}><a>{title}</a></Link></li>
                    )}
                </ul>
            </div>
        </InfoWrapper>
    )
}
export default Info;