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

    const data = [
        { "name": "shivam" },
        { "name": "mann" },
        { "name": "aditya" }
    ]

    return (
        <div className="container">
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
            <div className="dropdown">
                {data.map((item) => (
                    <div className="dropdown-row">
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;