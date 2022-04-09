import {RiSearchLine} from 'react-icons/ri';
interface i {
    handle : any,
    place : string
}
const Search = ({handle,place}:i) => {
    return(
        <div>
            <input type="text" name="" id="" placeholder={place} onInput={handle}/>
            <button><RiSearchLine/></button>
        </div>
    )
}
export default Search;