/* eslint-disable react/prop-types */
import { IoStarSharp } from "react-icons/io5";
import { RESTAURANT_CARD_IMG_URL } from "./Constant";

function RestaurantCard ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating
}) {

  console.log("####", cloudinaryImageId)

    return (
      <div>
        <div className="card">
          <img src={`${RESTAURANT_CARD_IMG_URL}/${cloudinaryImageId}`} />
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