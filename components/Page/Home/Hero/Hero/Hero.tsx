import { IntMovie } from "../Movie/interface";
import Movie from "../Movie/Movie";
const Hero = ({movie,title}:IntMovie) => {
    return(
        <header>
            <Movie
                movie={movie}
                title={`RadWEB <br/> ${title}`}
            />
        </header>
    )
}
export default Hero;