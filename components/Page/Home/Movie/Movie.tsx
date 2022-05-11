import { MovieWrapper } from "./styles";

const Movie = () => {
    return(
        <MovieWrapper>
            <div>
                <iframe 
                    src="https://www.youtube.com/embed/VzKSQItXLbE?start=2" 
                    title="Tworzenie strony internetowej" 
                    allow="autoplay"
                    allowFullScreen
                />
            </div>
        </MovieWrapper>
    )
}
export default Movie;