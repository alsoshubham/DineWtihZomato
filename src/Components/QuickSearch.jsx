/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

// QuickSearch component to display the quick search cards on the home page like "Online Delivery", "Dine-out", etc.

function QuickSearch({
  title, // The title to be displayed in the card
  img, // The URL of the image to be displayed in the card
  route, // The route to be redirected to when the card is clicked
  subtitle, // The subtitle to be displayed in the card
}) {
  return (
    <div className="flex justify-center items-center w-full">
      <Link to={route} className="no-underline text-inherit hover:text-black">
        <div className="w-72 h-96 flex flex-col justify-between items-center p-4 border border-transparent shadow-lg transition-transform transform hover:scale-105 rounded-lg">
          <img className="w-full h-3/5 object-cover rounded-t-lg" src={img} alt={title} /> {/* Image with the provided URL and alt text */}
          <h2 className="text-xl font-semibold text-start text-black">{title}</h2> {/* Title displayed as a heading */}
          <h4 className="text-lg text-start text-black">{subtitle}</h4> {/* Subtitle displayed as a subheading */}
        </div>
      </Link>
    </div>
  )
}

export default QuickSearch