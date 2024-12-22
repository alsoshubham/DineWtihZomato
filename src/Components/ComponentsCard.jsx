import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

function Collection() {
  const [restaurantList, setRestaurantList] = useState([]); // State to store restaurant data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Function to fetch restaurants from Swiggy API
    const fetchRestaurants = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch restaurant data');
        }
        const data = await response.json();
        // Extract restaurant data from the response
        const restaurants = data?.data?.cards[2]?.data?.data?.cards || [];
        setRestaurantList(restaurants); // Update state with fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <div>
        <h1 className="flex justify-items-start">Collections</h1>
        <p className="flex justify-items-start">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
          <a href="" className="text-red-500 gap-10 justify-evenly">
            All Collection in Delhi NCR
          </a>
        </p>
      </div>
      <div className="restaurant-list">
        {loading && <p>Loading restaurants...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading &&
          !error &&
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          ))}
      </div>
    </div>
  );
}

export default Collection;
