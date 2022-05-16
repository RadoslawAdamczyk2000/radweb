import { IntMovieAbout } from "../../../../../types/interface";
import { MovieWrapper } from "./styles";
const Movie = ({movie,movieTitle}:IntMovieAbout) => {
    return(
        <MovieWrapper title={movieTitle}>
            <iframe 
                src={movie}
                title={movieTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            />
        </MovieWrapper>
    )
}
export default Movie;