import { footer } from "../../../../data/footer";
import { TitleWrapper } from "./styles/TitleWrapper";
const Title = () => {
    const {title,subtitle} = footer.head;
    const {disclaimer} = footer.pl;
    return(
        <TitleWrapper>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{disclaimer}</p>
        </TitleWrapper>
    )
}
export default Title;