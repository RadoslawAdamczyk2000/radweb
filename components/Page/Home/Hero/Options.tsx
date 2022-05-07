import {CgPlayTrackNext,CgPlayPause,CgPlayTrackPrev} from "react-icons/cg";
import { IntOptionsHeroHome } from "../../../../types/interface";
import { OptionsWrapper } from "./styles";
const Options = ({handleNext,handlePrev,slide}:IntOptionsHeroHome) => {
    return(
        <OptionsWrapper>
            <div className="slide">
                0{slide + 1}
            </div>
            <ul>
                <li onClick={handlePrev} className='button'>
                    <CgPlayTrackPrev/>
                </li>
                <li onClick={handleNext} className='button'>
                    <CgPlayTrackNext/>
                </li>
            </ul>
        </OptionsWrapper>
    )
}
export default Options;