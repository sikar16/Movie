import React, { useState } from 'react'
import Homes from '../Component/Home/Homes'
import Upcomming from '../Component/Upcomming/Upcomming'
import { latest, upcome,recommended } from '../../DammpyData'
import Trending from '../Component/Trending/Trending'
// import {homeData} from '../../DammpyData'
function HomePage() {
  const[items,setItems]=useState(upcome)
  const[item,setItem]=useState(latest)
  const[rec,setrec]=useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies'/>
      <Upcomming items={item} title='Latest Movies'/>
      <Trending/>
      <Upcomming items={rec} title='Recommanded Movies'/>

    </>
  )
}  

export default HomePage