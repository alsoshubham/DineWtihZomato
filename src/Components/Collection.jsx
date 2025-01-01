import { restaurantList } from "./Constant"; // Importing the restaurant list
import RestaurantCard from "./RestaurantCard"; // Importing the RestaurantCard component

// Defining the Collection component
function Collection() {
  return (
    <div>
      <div>
        {/* Header section */}
        <h1 className="flex justify-items-start">Collections</h1>
        <p className="flex justify-items-start">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
          {/* Link to all collections */}
          <a href="" className="text-red-500 gap-10 justify-evenly">
            All Collection in Delhi NCR
          </a>
        </p>
      </div>
      {/* Adding grid layout for restaurant list */}
      <div className="restaurant-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Mapping over the restaurant list to render RestaurantCard components */}
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
}

// Exporting the Collection component as default
export default Collection;
