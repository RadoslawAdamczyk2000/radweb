import {IntCite} from '../../types/interface';
const Cite = ({author,cite}:IntCite) => {
    return(
        <section>
            <q>{cite}</q>
            <cite>{author}</cite>
        </section>
    )
}
export default Cite;