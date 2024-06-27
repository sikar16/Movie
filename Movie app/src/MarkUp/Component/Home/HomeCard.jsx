import React from 'react'
import { Link } from 'react-router-dom'
export const HomeCard=({item:{id,cover,name,rating,time,desc,starring,genres,tags,video}})=>{
  return (
    <>
    <div className="box">
      <div className="coverImage">
        <img src={cover} alt="" />
      </div>
      <div className='content flex'>
      <div className='detaile'>
      <h1>{name}</h1>
      <div className="rating flex">
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star-half'></i>
      </div>
      <label htmlFor="">{rating}</label>
      <span>GP </span>
      <label htmlFor="">{time}</label>
     
      <p>{desc}</p>
      <div className='cast'>
        <h4>
          <span>Starring</span>{starring}
        </h4>
        <h4>
          <span>Geners</span>{genres}
        </h4>
        <h4>
          <span>Tags</span>{tags}
        </h4>
        </div>
      
        <button className='primary-btn'>
        <i className='fas fa-play'></i> Play Now
       </button>  </div>
      
       <div className="playButton row">
        <Link to={`/singlepage/${id}`}>
        <button>
          <div className="img">
            <img src='../../../../public/images/play-button.png' alt="" />
            <img src='../../../../public/images/play.png' alt="" className='change' />
          </div>
            Watch Trailer
        </button>
        </Link>
       </div>
    </div>
    </div>
    </>)
  
}

