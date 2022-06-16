import { IntMovie } from "./interface";
import { MovieWrapper } from "./styles";
const Movie = ({movie,title}:IntMovie) => {
    return(
        <MovieWrapper>
            <video
                autoPlay
                loop
                muted
                src={movie}
                title=''
            />
            <div>
                <section>
                    <h1 dangerouslySetInnerHTML={{__html:title}} />
                </section>
            </div>
        </MovieWrapper>
    )
}
export default Movie;