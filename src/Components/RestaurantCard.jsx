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
        <div className="card border border-gray-300 rounded-lg p-4 m-4 shadow-lg max-w-xs text-center bg-white">
          <img src={`${RESTAURANT_CARD_IMG_URL}/${cloudinaryImageId}`} className="w-full h-auto rounded-t-lg" />
          <h2 className="text-xl my-2">{name}</h2>
          <h4 className="text-gray-600 my-2">{cuisines.join(", ")}</h4>
          <h4 className="text-gray-600 my-2">{area}</h4>
          <span className="flex justify-between mt-4">
            <h4 className="flex items-center text-yellow-500">
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