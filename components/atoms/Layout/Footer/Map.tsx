import { footer } from "../../../../data/footer";
import { MapWrapper } from "./styles/MapWrapper";
const Map = () => {
    const {map} = footer;
    return(
        <MapWrapper>
            <iframe 
                src={map}
                width="600" 
                referrerPolicy="no-referrer-when-downgrade"
            />
        </MapWrapper>
    )
}
export default Map;