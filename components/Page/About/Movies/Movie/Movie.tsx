import { IntMovie } from "./interface";
const Movie = ({movie}:IntMovie) => {
    return(
        <li>
            <iframe 
                src={movie}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            />
        </li>
    )
}
export default Movie;