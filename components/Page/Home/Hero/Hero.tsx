import { useState } from "react";
import { slides } from "../../../../data/slides";
import Options from "./Options";
import Slide from "./Slide";
import { HeroWrapper } from "./styles";

const Hero = () => { 
    const [slide,setSlide] = useState(0);
    const nextSlide = () => {
        if(slide > (slides.length - 2)){
            setSlide(0);
        }else{
            setSlide(slide + 1);
        }
    }
    const prevSlide = () => {
        if(slide < 1){
            setSlide(slides.length - 1);
        }else{
            setSlide(slide - 1);
        }
    }
    return(
        <HeroWrapper>
            <Slide
                button={slides[slide].button}
                content={slides[slide].content}
                image={slides[slide].image.light}
                link={slides[slide].link}
                title={slides[slide].title}
            />
            <Options
                handleNext={() => nextSlide()}
                slide={slide}
                handlePrev={() => prevSlide()}
            />
        </HeroWrapper>
    )
}
export default Hero;