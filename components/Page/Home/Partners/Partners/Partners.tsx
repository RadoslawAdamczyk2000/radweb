import Partner from "../Partner/Partner"
import { PartnersWrapper } from "./styles";

const Partners = () => {
    return(
        <PartnersWrapper>
            <div>
                <h2>Partnerzy</h2>
            </div>
            <ul>
                <Partner
                    path="#"
                    title="Borówkowy Gaj"
                />
                <Partner
                    path="#"
                    title="Filip Bukowiecki"
                />
                <Partner
                    path="#"
                    title="Agromar"
                />
            </ul>
        </PartnersWrapper>
    )
}
export default Partners;