import {CgPlayTrackNext,CgPlayPause,CgPlayTrackPrev} from "react-icons/cg";
import { slides } from "../../../../data/slides";
import Slide from "./Slide";
import { HeroWrapper } from "./styles";
const Hero = () => { 
    return(
        <HeroWrapper>
            <Slide
                button={slides[0].button}
                content={slides[0].content}
                image={slides[0].image}
                isMain={slides[0].isMain}
                link={slides[0].link}
                title={slides[0].title}
            />
            <div className='options'>
                <div className="progress">
                    <div className="bar"/>
                </div>
                <p className="slide">
                    01
                </p>
                <div className="button">
                    <CgPlayTrackPrev/>
                </div>
                <div className="button">
                    <CgPlayPause/>
                </div>
                <div className="button">
                    <CgPlayTrackNext/>
                </div>
            </div>
        </HeroWrapper>
    )
}
export default Hero;