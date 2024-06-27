import React, { useState } from 'react'
import Home from './Home'
import {homeData} from '../../../DammpyData'
import './home.css'
function Homes() {
  const[items,setItems]=useState(homeData)

  return (
    <>
    <section className='home'>
      <Home items={items}/>
    </section>
    <div className='margin'></div>
    </>
  )
}  

export default Homes