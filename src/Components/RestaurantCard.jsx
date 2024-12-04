/* eslint-disable react/prop-types */
import { IoStarSharp } from "react-icons/io5";

function RestaurantCard ({
  // cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating
}) {

    return (
      <div>
        <div className="card">
          {/* <img src={IMG_CDN_URL + cloudinaryImageId} /> */}
          <h2>{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{area}</h4>
          <span>
            <h4>
              <IoStarSharp />
              {avgRating}
            </h4>
            <h4>{lastMileTravelString}</h4>
            <h4>{costForTwoString}</h4>
          </span>
        </div>
      </div>
    );
  };

  export default RestaurantCard