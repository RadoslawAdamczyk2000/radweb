import { IntSearch } from "../../types/interface"
import { SearchWrapper } from "./styles";
const Search = ({handle,name}:IntSearch) => {
    return(
        <SearchWrapper>
            <input 
                type="search" 
                name={`${name}SearchName`} 
                id={`${name}SearchId`} 
                placeholder='Szukaj...' 
                onInput={handle}
                pattern="[A-z]{2}[0-9]{4}"
            />
        </SearchWrapper>
    )
}
export default Search;