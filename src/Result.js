import { useEffect, useState } from "react";
import './Results.css';

const Result = ({ query }) => {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://kgsearch.googleapis.com/v1/entities:search?query=${query}&key=AIzaSyBtnD9Fk9ZUWJjg98O-UgXl8f9zepdMU0I&limit=5&indent=true`)
            .then(response => response.json())
            .then((data) => {
                console.log(data.itemListElement);
                setIsLoaded(true);
                setItems(data.itemListElement);
            }, (error) => {
                setIsLoaded(true);
                setError(true);
            });
        // eslint-disable-next-line
    }, [query]);

    if (error) {
        return <div className="error">Error!</div>
    } else if (!isLoaded) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div className="searchContainer">
                <ul className="searchItems">
                    {isLoaded && (Object.values(items).map((item, ind) => (
                        <li className="searchResults" key={ind}>
                            <a href={item.result.url} target="_blank" rel="noopener noreferrer">{item.result.name}</a>
                        </li>
                    )
                    ))}
                </ul>
            </div>
        );
    }
}

export default Result;