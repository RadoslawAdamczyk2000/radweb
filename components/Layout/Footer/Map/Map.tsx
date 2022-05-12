import { MapWrapper } from "./styles";

const Map = () => {
    return(
        <MapWrapper>
            <iframe 
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57076.089976178075!2d16.899334984110414!3d52.09598649863037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfaadbf09f94aecf!2sRadWEB!5e0!3m2!1spl!2spl!4v1641832823323!5m2!1spl!2spl'
                referrerPolicy="no-referrer-when-downgrade"
            />
        </MapWrapper>
    )
}
export default Map;