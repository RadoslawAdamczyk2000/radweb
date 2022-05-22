import { IntAboutMeText, IntMovieAbout } from "../../../../../types/interface"
import Movie from "./Movie"
import { MoviesSectionWrapper } from "./styles"
import Text from "./Text"
interface i extends IntAboutMeText {
    movies:any[]
}
const MoviesSection = ({content,heading,movies,path}:i) => {
    return(
        <MoviesSectionWrapper>
            <div>
            <Text
                content={content}
                heading={heading}
                path={path}
            />
            </div>
            <ul>
                {movies.map(({url:movie,title:movieTitle}:{url:string,title:string},key:number) => 
                    <Movie
                        key={key}
                        movie={movie}
                        movieTitle={movieTitle}
                    />
                )}
            </ul>
        </MoviesSectionWrapper>
    )
}
export default MoviesSection;