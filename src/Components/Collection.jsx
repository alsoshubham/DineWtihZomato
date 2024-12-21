import {restaurantList} from './Constant'
import RestaurantCard from './RestaurantCard';
function Collection () {
    return (
      <div>
        <div >
        <h1 className='flex justify-items-start'>Collections</h1>
        <p className='flex justify-items-start'>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
          <a href="" className='text-red-500 gap-10 justify-evenly'>All Collection in Delhi NCR</a>
        </p>
        </div>
        <div className="restaurant-list">
          {restaurantList.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            );
          })}
        </div>
      </div>
    );
  };
  export default Collection