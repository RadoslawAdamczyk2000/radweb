import { footer } from "../../data/footer"
import { MapWrapper } from "./styles";
const Map = () => {
    const {map}:{map:string} = footer;
    return(
        <MapWrapper>
            <iframe 
                src={map}
                referrerPolicy="no-referrer-when-downgrade"
            />
        </MapWrapper>
    )
}
export default Map;