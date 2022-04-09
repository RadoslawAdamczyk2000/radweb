import { useEffect, useState } from 'react';
import {RiSearchLine} from 'react-icons/ri';
import { SearchWrapper } from './styles/SearchWrapper';
interface i {
    handle ?: any,
}
const Search = ({handle}:i) => {
    const [isActive,setActive] = useState(false);
    return(
        <SearchWrapper active={isActive} onMouseLeave={() => setActive(false)} onHover={() => setActive(true)} onMouseOver={() => setActive(true)}>
            <input 
                type="text"
                name="" 
                id="" 
                placeholder='Szukaj'  
                onFocus={() => setActive(true)}
                onInput={handle}
                onHover={() => setActive(true)}
            />
            <button><RiSearchLine/></button>
        </SearchWrapper>
    )
}
export default Search;