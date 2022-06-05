import {FiChevronsLeft,FiChevronsRight} from 'react-icons/fi';
import Button from '../Button/Button';
import Movie from '../Movie/Movie';
import { HeroWrapper } from './styles';
const Hero = () => {
    return(
        <HeroWrapper>
            <Movie
                button='Dowiedz się więcej'
                movie='/assets/movies/sea.mp4'
                path='/'
            >
                RadWEB<br/>
                Programowanie i pozycjonowanie
            </Movie>
            <Button
                handle={() => console.log('left')}
                isLeft={true}
            />
            <Button
                handle={() => console.log('right')}
                isRight={true}
            />
        </HeroWrapper>
    )
}
export default Hero;