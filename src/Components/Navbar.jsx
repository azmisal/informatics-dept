import React from 'react'
import Logo from "../Assets/logo.png"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='flex items-center justify-center pt-5 pb-8 '>
      <div className="innerBar pr-10 pl-10 flex flex-row h-10 w-8/12 justify-between items-center rounded-3xl">
        <div className="logo">           
            <img src={Logo} alt="" className='w-20'/>


        </div>
        <div className="navLinks ">
                <ul className="flex items-center justify-center">
                    <li className="navlinks cursor-pointer mr-10 font-poppins text-xs font-medium leading-6 text-left ">HOME</li>
                    <li className="navlinks cursor-pointer mr-10 font-poppins text-xs font-medium leading-6 text-left">ABOUT</li>
                    <li className="navlinks cursor-pointer mr-10 font-poppins text-xs font-medium leading-6 text-left">ACADEMICS</li>
                    <li className="navlinks cursor-pointer mr-10 font-poppins text-xs font-medium leading-6 text-left">PEOPLE</li>
                    <li className="navlinks cursor-pointer mr-10 font-poppins text-xs font-medium leading-6 text-left">RESEARCH</li>
                    <li className="navlinks cursor-pointer font-poppins text-xs font-medium leading-6 text-left">GALLERY</li>

                </ul>
            </div>
        </div>
     </div>
  )
}

export default Navbar