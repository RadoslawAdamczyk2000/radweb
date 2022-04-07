import Map from "../../../atoms/Layout/Footer/Map";
import Socials from "../../../atoms/Layout/Footer/Socials"
import Title from "../../../atoms/Layout/Footer/Title"
import { HeadWrapper } from "./styles/HeadWrapper";
const Head = () => {
    return(
        <HeadWrapper>
            <div>
                <Title/>
                <Socials/>
            </div>
            <Map/>
        </HeadWrapper>
    )
}
export default Head;