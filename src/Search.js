import { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import Result from './Result';

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
      {searchVal && <div className="dropdown">
        <Result query={searchVal} />
      </div>}
    </div>
  );
}

export default Search;