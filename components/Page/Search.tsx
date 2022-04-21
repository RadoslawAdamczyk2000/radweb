import { IntSearch } from "../../types/interface"
const Search = ({handle,name}:IntSearch) => {
    return(
        <div>
            <input 
                type="search" 
                name={`${name}SearchName`} 
                id={`${name}SearchId`} 
                placeholder='Szukaj...' 
                onInput={handle}
            />
        </div>
    )
}
export default Search;