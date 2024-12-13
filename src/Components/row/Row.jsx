import React, { useEffect } from 'react'
import './Row.css'
import axios from '../../axios'
function Row() {
    useEffect(()=>{
        axios.get()
    },[])
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