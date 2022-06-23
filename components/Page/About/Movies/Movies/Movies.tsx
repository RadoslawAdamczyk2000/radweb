import { about } from "../../../../../content/about"
import Movie from "../Movie/Movie";
import { MoviesWrapper } from "./styles";
const Movies = () => {
    const {movies} = about;
    return(
        <MoviesWrapper>
            {movies.map((item:string,index:number) =>
                <Movie
                    key={index}
                    movie={item}
                />
            )}
        </MoviesWrapper>
    )
}
export default Movies;