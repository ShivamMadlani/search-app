import { useEffect, useState } from "react";
import './Results.css';

const Result = ({ query }) => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://kgsearch.googleapis.com/v1/entities:search?query=${query}&key=${process.env.REACT_APP_API_KEY}&limit=20&indent=true`)
      .then(response => response.json())
      .then((data) => {
        if (data.itemListElement === undefined) {
          setError(true);
        }
        setIsLoaded(true);
        setItems(data.itemListElement);
      }, (error) => {
        setIsLoaded(true);
        setError(true);
      });
    // eslint-disable-next-line
  }, [query]);

  if (error) {
    return <div className="error">Error! Try entering a valid API key or search for another query</div>
  } else if (!isLoaded) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <div className="searchContainer">
        <ul className="searchItems">
          {isLoaded && (Object.values(items).map((item, ind) => (
            <li className="searchResults" key={ind}>
              <a href={item.result.detailedDescription && item.result.detailedDescription.url} target="_blank" rel="noopener noreferrer">
                <div className="itemName">
                  {item.result.name}
                </div>
                <div className="itemDescription">
                  {item.result.detailedDescription && item.result.detailedDescription.articleBody}
                </div>
              </a>
              <img className="contentImg" src={item.result.image && item.result.image.contentUrl} alt='' />
            </li>
          )
          ))}
        </ul>
      </div>
    );
  }
}

export default Result;