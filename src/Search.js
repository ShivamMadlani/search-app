import { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Result from './Result';

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const hist = JSON.parse(localStorage.getItem('srchHist'));

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchVal("");
  }

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  }

  // const delHist = (event, name) => {
  //   var items = JSON.parse(localStorage.getItem('srchHist'));
  //   for (var i = 0; i < items.length; i++) {
  //     if (items[i].name == name) {
  //       items.splice(i, 1);
  //     }
  //   }
  //   items = JSON.stringify(items);
  //   localStorage.setItem('srchHist', items);
  // }

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
      {!searchVal && localStorage.getItem('srchHist') && <div className="dropdown">
        <ul className="searchItems">
          {localStorage.getItem('srchHist') && (Object.values(hist).map((item, ind) => (
            <li className="searchResults" key={ind}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="historyItemName">
                  {item.name}
                </div>
              </a>
              {/* <button onClick={event => delHist(event, item.name)} className="btn">
                <CloseIcon fontSize='medium' />
              </button> */}
            </li>
          )))}
        </ul>
      </div>}
    </div>
  );
}

export default Search;