import React from 'react'
import Rotator from "../Assets/rot.png"
import "./Home.css"
const Home = () => {
  return (
    <div className='Home w-screen flex justify-center'>
      <div className="school flex flex-row items-center justify-center w-10/12 bg-black pt-11 pb-11 relative overflow-y-hidden">
        <img src={Rotator} alt="" className='w-32  absolute -left-8'/>
        <h1 className='schoolText text-white font-poppins text-6xl font-normal leading-36 text-left'>School Of Informatics</h1>
      </div>
    </div>
  )
}

export default Home