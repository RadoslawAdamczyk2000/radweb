import { FormEventHandler } from "react";
import { SubjectWrapper } from "./styles";
const Subject = ({handle}:{handle:FormEventHandler}) => {
    return(
        <SubjectWrapper>
            <label htmlFor="subject">Wybierz temat</label>
            <div>
                <select 
                    name="subject" 
                    id="subject" 
                    onInput={handle}
                    required 
                    autoFocus
                >
                    <option value="none">
                        Wybierz temat
                    </option>
                    <option value="stworzenie-strony">
                        Stworzenie strony
                    </option>
                    <option value="pozycjonowanie-strony">
                        Pozycjonowanie strony
                    </option>
                    <option value="optymalizacja-strony">
                        Optymalizacja strony
                    </option>
                    <option value="analiza-strony">
                        Analiza strony
                    </option>
                    <option value="wspolpraca">
                        Nawiązanie współpracy
                    </option>
                    <option value="inne">
                        Inne
                    </option>
                </select>
            </div>
        </SubjectWrapper>
    )
}
export default Subject;