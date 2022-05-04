import Image from "next/image";
import {CgPlayTrackNext,CgPlayPause,CgPlayTrackPrev} from "react-icons/cg";
const Hero = () => { 
    return(
        <header>
            <div>
                <figure>
                    <Image
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        title=''
                        quality={85}
                        src='https://cdn.pixabay.com/photo/2022/02/23/05/10/tiramisu-7030032_960_720.jpg'
                    />
                </figure>
                <figure>
                    <Image
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        title=''
                        quality={95}
                        src='https://cdn.pixabay.com/photo/2022/04/06/20/54/man-7116367_960_720.jpg'
                    />
                </figure>
            </div>
            <div>
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
        </header>
    )
}
export default Hero;