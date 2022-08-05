import { useEffect, useState } from "react";

const Result = (query) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    useEffect(() => {
        console.log(query);
        fetch(`https://kgsearch.googleapis.com/v1/entities:search?query=${query}&key=AIzaSyBtnD9Fk9ZUWJjg98O-UgXl8f9zepdMU0I`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setIsLoaded(true);
                setItems(data);
            }, (error) => {
                setIsLoaded(true);
                setError(true);
            });
        // eslint-disable-next-line
    });

    // if (error) {
    //     return <div className="error">Error!</div>
    // } else if (!isLoaded) {
    //     return <div className="loading">Loading...</div>
    // } else {
    //     return (
    //         <ul>
    //             {items.map((item) => (
    //                 <li key={item.id}>
    //                     {item.name}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }
}

export default Result;