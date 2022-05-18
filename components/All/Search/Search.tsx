import { RiSearch2Line } from "react-icons/ri"
import { SearchWrapper } from "./styles";
const Search = ({handle,title,placeholder}) => {
    return(
        <SearchWrapper>
            <div>   
                <input
                    id={`${title}Search`}
                    name={`${title}Search`}
                    onInput={handle}
                    pattern="[A-z]{2}[0-9]{4}"
                    placeholder={placeholder}
                    type='search'
                />
                <span/>
            </div>
            <div>
                <span>
                    <RiSearch2Line/>
                </span>
            </div>
        </SearchWrapper>
    )
}
export default Search;