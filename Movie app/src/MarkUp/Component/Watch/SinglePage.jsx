import React, { useEffect, useState } from 'react'
import './singlepage.css'
import { useParams } from 'react-router-dom'
import { homeData, recommended } from '../../../DammpyData'
import Upcomming from '../Upcomming/Upcomming'

function SinglePage() {
    const{id}=useParams()
    const[item,setitems]=useState(null)
    
    useEffect(()=>{
        let item=homeData.find((item)=>item.id===parseInt(id))
        if(item){
            setitems(item)
        }
    },[id])
    const[rec,setrec]=useState(recommended)

  return (
    <>{item? (<>
    <section>
        <div className="singlepage">
        <div className="singHeading">
            <h1>{item.name}</h1>
            <span>| {item.time} | Hd</span>
        </div>
        <div className="container">
            <video src={item.video} controls></video>
            <div className="para">
                <h3>
                    {item.date}
                </h3>
                <p>
                    {item.desc}
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum dicta sit veritatis explicabo architecto velit dignissimos excepturi ducimus. Assumenda cum officia fugit debitis labore, cupiditate veritatis dolorem. Ad, porro!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum dicta sit veritatis explicabo architecto velit dignissimos excepturi ducimus. Assumenda cum officia fugit debitis labore, cupiditate veritatis dolorem. Ad, porro!</p>
            </div>
            <div className="social">
                <h3>Share</h3>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-youtube'></i>         
                   </div>
        </div>
    </div>
    </section>
    <Upcomming items={rec} title='Recommanded Movies'/>
    
    </>):null}</>
  )
}

export default SinglePage