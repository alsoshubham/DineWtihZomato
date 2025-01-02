import { useEffect, useState } from 'react';

function Restaurant() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            .then(response => response.json())
            .then(data => setRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <section>
                <h2>Whats on your mind?</h2>
                <div className="Scrollable">
                    {restaurants.map((restaurant, index) => (
                        <div key={index} className="restaurant-card">
                            <h3>{restaurant.info.name}</h3>
                            <p>{restaurant.info.cuisines.join(', ')}</p>
                            <p>{restaurant.info.areaName}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Restaurant;