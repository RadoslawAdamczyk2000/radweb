import { useEffect, useState } from "react";
import { tech } from "../../../../data/tech";
import { TechWrapper } from "./styles/TechWrapper";
const Tech = () => {
    let [activeTech,setActiveTech] = useState('');
    useEffect(() => {console.log(activeTech)});
    return(
        <TechWrapper>
            {tech.map(({icon,title,value}) => 
                <li key={title}>
                    <button onClick={() => setActiveTech(value)} title={title}>
                        {icon}
                    </button>
                </li>
            )}
            
        </TechWrapper>
    )
}
export default Tech;