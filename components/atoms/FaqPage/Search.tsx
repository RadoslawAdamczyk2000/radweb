import {RiSearchLine} from 'react-icons/ri';
interface i {
    place : string
}
const Search = ({place}:i) => {
    return(
        <div>
            <input type="text" name="" id="" placeholder={place} />
            <button><RiSearchLine/></button>
        </div>
    )
}
export default Search;