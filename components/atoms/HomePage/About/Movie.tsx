import { home } from "../../../../content/pages/home";
import { MovieWrapper } from "./styles/MovieWrapper";
const Movie = () => {
      const {about} = home.pl;
    return(
        <MovieWrapper>
            <iframe 
                src={about.movie} 
                title={`${about.title} movie`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            />
        </MovieWrapper>
    )
}
export default Movie;