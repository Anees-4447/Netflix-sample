import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className="banner">
        <div className="content">
            <h1 className="title">Movie name</h1>
            <h1 className="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem ratione quas, deleniti architecto dolore magni veritatis ipsam voluptates recusandae accusamus iste quisquam at consectetur quia ab rem velit unde?</h1>
            <div className="banner-buttons">
                <button className="buttons">Play</button>
                 <button className="buttons">Watch Trailer</button>
            </div>
            <div className="fade-bottom"></div>
        </div>
    </div>
  )
}

export default Banner