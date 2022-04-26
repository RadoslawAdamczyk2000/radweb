import { IntMovies } from "../../types/interface";
import { MoviesWrapper } from "./styles";
const Movies = ({movies}:IntMovies) => {
    return(
        <MoviesWrapper>
            {movies.map((movie:string,key:number) => 
                <iframe 
                    key={key}
                    title='YouTube video player'
                    src={movie}
                />
            )}
        </MoviesWrapper>
    )
}
export default Movies;