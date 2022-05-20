import { IntSectionLocation } from "../../../../../types/interface";
import Button from "./Button";
import { Section } from "./styles";
const Ana = ({city,loc}:IntSectionLocation) => {
    return(
        <Section>
           <h2>Analiza stron {city}</h2>
            <p>
                Analiza stron daje możliwość zweryfikowania tego co warto zmienić na stronie oraz jakie tematy poruszać. W ramach  analizy serwisów internetowych w {loc}. W ramach analityki oferuję również zaaplikowanie narzędzi Google, abyś Ty jako właściciel mół indywidualnie śledzić wyniki strony.
            </p>
            <ul className="buttons">
                <Button
                    path='/oferty/analityka-stron-internetowych'
                    primary={true}
                />
            </ul> 
        </Section>
    )
}
export default Ana;