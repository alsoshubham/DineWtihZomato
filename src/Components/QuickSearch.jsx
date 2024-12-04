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
      <div className="card">
        <img src={url} alt={img} />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
    </div>
  )
}

export default QuickSearch