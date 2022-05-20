import { IntSectionLocation } from "../../../../../types/interface";
import Button from "./Button";
import { Section } from "./styles";
const Www = ({city,loc}:IntSectionLocation) => {
    return(
        <Section>
           <h2>Strony internetowe {city}</h2>
            <p>
                Do tworzenia stron i aplikacji internetowych wykorzystuję m.in. HTML&CSS, JavaScript, React, Gatsby oraz NextJS wraz z prawie wszystkimi dowolnymi systemami zarządzania treścią. Posiadam szeroką gamę ofert stron internetowych w {loc}. Wśród nich znajdziesz:
            </p>
            <ul className='list'>
                <li><h3>Portfolio</h3></li>
                <li><h3>Single Page Applications</h3></li>
                <li><h3>Blogi</h3></li>
                <li><h3>Strony z panelami administracyjnymi</h3></li>
                <li><h3>Strony wizytówkowe, firmowe i branżowe</h3></li>
            </ul>
            <ul className="buttons">
                <Button
                    path='/oferty/tworzenie-stron-internetowych'
                    primary={true}
                />
                <Button
                    path='/#etapy-realizacji'
                    primary={false}
                />
            </ul> 
        </Section>
    )
}
export default Www;