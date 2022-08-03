import { useState } from 'react'
import './Search.css'

const Search = () => {
    const [searchVal, setSearchVal] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchVal("");
    }

    const handleChange = (e) => {
        setSearchVal(e.target.value);
    }

    return (
        <form className="search">
            <input
                id='input'
                autoComplete='off'
                spellCheck='false'
                placeholder='Search'
                value={searchVal}
                onChange={handleChange}
                type="text" />
            <button onClick={handleSearch}>Submit</button>
        </form>
    );
}

export default Search;