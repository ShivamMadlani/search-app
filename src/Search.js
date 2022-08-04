import { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
    const [searchVal, setSearchVal] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        props.search(searchVal);
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
            <button onClick={handleSearch} className="btn">
                <SearchIcon fontSize='large' />
            </button>
        </form>
    );
}

export default Search;