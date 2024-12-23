/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
function QuickSearch({
  title,
  img,
  url,
  subtitle,
}) {
  return (
    <div>
      <div className="card aspect-ratio-1/1 border-1 solid border-black">
        <img className="w-366 h-260" src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
    </div>
  )
}

export default QuickSearch