import React from 'react'
import './Row.css'

function Row() {
  return (
    <div className="row">
        <h1 className="title">Netflix Originals</h1>
        <div className="posters">
            <img src="/images/money-heist-cast-poster.jpg" alt="" />
        </div>
    </div>
  )
}

export default Row