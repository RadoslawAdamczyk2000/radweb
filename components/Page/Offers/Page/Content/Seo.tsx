import { IntSectionLocation } from "../../../../../types/interface";
import Button from "./Button";
import { Section } from "./styles";
const Seo = ({city,dat}:IntSectionLocation) => {
    return(
        <Section>
           <h2>Pozycjonowanie stron {city} </h2>
            <p>W ramach kompleksowej realizacji dbam również o pozycjonowanie stron na trenie {dat}. W pracach SEO aplikuję sprawdzone metody pozycjonowania, co pozwoli wybić serwisy internetowe w wyszukiwarce Google. Sprawdź co pozycjonuję:</p>
            <ul className='list'>
                <li><h3>Strony internetowe</h3></li>
                <li><h3>Blogi</h3></li>
                <li><h3>Sklepy internetowe</h3></li>
            </ul>
            <ul className="buttons">
                <Button
                    path='/oferty/pozycjonowanie-stron-internetowych'
                    primary={true}
                />
            </ul> 
        </Section>
    )
}
export default Seo;