import { useEffect, useState } from "react";

const Result = ({ query }) => {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://kgsearch.googleapis.com/v1/entities:search?query=${query}&key=AIzaSyBtnD9Fk9ZUWJjg98O-UgXl8f9zepdMU0I&limit=10&indent=true`)
            .then(response => response.json())
            .then((data) => {
                setIsLoaded(true);
                setItems(data);
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
            <div>Rendered
                {/* <ul>
                    {isLoaded && (items.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    )))}
                </ul> */}
            </div>
        );
    }
}

export default Result;