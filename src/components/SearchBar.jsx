import {useState} from 'react';

const SearchBar = () => {

    const [isFocus, setIsFocus] = useState(false);

    return ( 
        <div className="flex relative">
            <input placeholder="Search..." className={`input ${isFocus === true ? 'md:max-w-96':'Md:max-w-32'}`} type="text" onFocus={()=>setIsFocus(true)} onBlur={() => setIsFocus(false)}/>
            <i className={`bi bi-search absolute right-4 top-2 ${isFocus === true ? 'text-black dark:text-white':'text-black/25 dark:text-white/15'}`}></i>
        </div>
     );
}
 
export default SearchBar;