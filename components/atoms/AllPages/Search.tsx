import { useEffect, useState } from 'react';
import {RiSearchLine} from 'react-icons/ri';
import { SearchWrapper } from './styles/SearchWrapper';
const Search = () => {
    const [isActive,setActive] = useState(false);
    return(
        <SearchWrapper active={isActive} onMouseLeave={() => setActive(false)} onHover={() => setActive(true)} onMouseOver={() => setActive(true)}>
            <input 
                type="text"
                name="" 
                id="" 
                placeholder='Szukaj'  
                onFocus={() => setActive(true)}
                onHover={() => setActive(true)}
            />
            <button><RiSearchLine/></button>
        </SearchWrapper>
    )
}
export default Search;