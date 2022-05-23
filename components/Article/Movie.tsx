import { MovieWrapper } from "./styles";

const Movie = ({movie,title}:{movie:string;title:string}) => {
    return(
        <MovieWrapper>
            <iframe 
                src={movie}
                title={title}
                allowFullScreen
            />
        </MovieWrapper>
    )
}
export default Movie;