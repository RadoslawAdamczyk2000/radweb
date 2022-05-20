import { IntSectionLocation } from "../../../../../types/interface";
import Button from "./Button";
import { Section } from "./styles";
const Opt = ({city,loc}:IntSectionLocation) => {
    return(
        <Section>
           <h2>Optymalizacja stron {city}</h2>
            <p>
                Chcesz zmienić szatę graficzną lub dodać jakieś nowe funkcjonalności na stronę. Również w miarę możliwości moe naprawić błędy, które popsuły stronę. Wybierz najlepszą optymalizację w {loc}
            </p>
            <ul className="buttons">
                <Button
                    path='/oferty/optymalizacja-stron-internetowych'
                    primary={true}
                />
            </ul> 
        </Section>
    )
}
export default Opt;