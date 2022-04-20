import { footer } from "../../data/footer"
import Map from "./Map";
import Socials from "./Socials"
import { InfoWrapper } from "./styles";
const Info = () => {
    const {disclaimer} = footer.pl;
    const {title,subtitle} = footer.head;
    return(
        <InfoWrapper>
            <div>
                <article>
                    <p className='primary'>{title}</p>
                    <p className='secondary'>{subtitle}</p>
                    <p className='regular'>{disclaimer}</p>
                </article>
                <Socials/>
            </div>
            <Map/>
        </InfoWrapper>
    )
}
export default Info;