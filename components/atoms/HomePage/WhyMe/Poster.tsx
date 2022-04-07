import Image from 'next/image';
import tower from '../../../../assets/images/tower.webp';
import { PosterWrapper } from './styles/PosterWrapper';
const Poster = () => {
    return(
        <PosterWrapper>
            <Image
                src={tower}
                alt='Radosław Adamczyk - RadWEB'
                loading='lazy'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                style={{
                    borderRadius:'3rem'
                }}
            />
        </PosterWrapper>
    )
}
export default Poster;