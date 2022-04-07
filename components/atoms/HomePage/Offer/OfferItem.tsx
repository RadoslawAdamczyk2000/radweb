import { OfferItemWrapper } from "./styles/OfferItemWrapper";
import {RiArrowRightLine} from 'react-icons/ri';
interface i {
    handleCard : any,
    title : string
}
const OfferItem = ({handleCard,title}:i) => {
    return(
        <OfferItemWrapper>
            <button onClick={handleCard}>
                <p>
                    {title}
                </p>
                <div>
                    <i>
                        <RiArrowRightLine/>
                    </i>
                </div>
            </button>
        </OfferItemWrapper>
    )
}
export default OfferItem;