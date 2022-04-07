import { MoviesWrapper } from "./styles/MoviesWrapper";
interface i {
    movies : Array<string>
}
const Movies = ({movies}:i) => {
    return(
        <MoviesWrapper>
            {movies.map( i =>
                <iframe
                    key={i} 
                    title="YouTube video player"
                    src={i}
                />    
            )}
            
        </MoviesWrapper>
    )
}
export default Movies;