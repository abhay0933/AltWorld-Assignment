import React from 'react'
import logo from '../assets/logo.jpg'
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className='sidebarContainer'>
       <div >
        <div className='logoContainer'>
        <img src={logo} alt="" />
        <h4>Hi, AltWorld</h4>
        </div>
        <div className='line'></div>
       </div>
       <div className='optionsContainer'>
         <FaHome className='homeIcon'/>
         <p>DashBoard</p>
       </div>
       <div className='newassignmentBox'>
          <div className="plus">
            <FaPlus />
          </div>
          <h4>New Assignment?</h4>
          <p>Select from pre-definied questions to have a quick turn around</p>
          <button>Create New Assignment</button>
       </div>
    </div>
  )
}

export default SideBar
