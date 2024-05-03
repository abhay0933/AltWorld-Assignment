import React, { useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { IoCube } from "react-icons/io5";
import { FaCopy } from "react-icons/fa6";
import ReviewList from './ReviewList';
import { useNavigate,NavLink } from "react-router-dom";
import ShortList from './ShortList';
const List = () => {
    const navigate = useNavigate();
    const[active, setActive] = useState(null);
    let buttonslist=[{
        icon:<IoCube/>,
        name: "TO REVIEW",
        link:"/"
    },
    {
        name: "SHORTLISTED",
        icon:<FaCopy/>,
        link:"/shortlisted"
    },
    
    ]
  return (
    <div className='salesListContainer'>
    <div className='salestopic'>
    <p style={{color:"gray", fontWeight: "500", fontSize: "13px"}}>Pages <span style={{color: "black"}}> / Assignment</span></p>
    <h4>Sales BDE</h4>
    </div>
    <div className='SalesListMainContainer'>
        <div className="active">
            <h4>Sales SDE</h4>
            <div className='editiconContainer'>
                <h4 style={{color: "#2EBD59"}}>Active</h4>
                <div className="pencilicon">
                <FaPencilAlt />
                </div>
            </div>
        </div>
        <div className="assignmentLink">
            <h5 style={{color: 'gray'}}>Assignment Link</h5>
            <h5 style={{color: "blue"}}><a>https://tinyurl.com</a></h5>
        </div>
        <div className="assignmenTime">
            <h5 style={{color: 'gray'}}>Assignment Hour</h5>
            <h5 style={{color: "gray"}}>3 hours</h5>
        </div>
        <div className="assignmenTime">
            <h5 style={{color: 'gray'}}>Assignment Ends at</h5>
            <h5 style={{color: "gray"}}>6 May 2024</h5>
        </div>

        <div className="navigatebtn">
    {buttonslist.map((list)=>(
       <button className='activebtn'><NavLink exact to={list.link} className={window.location.pathname === list.link ? 'activee' : 'btnnn'}>{list.icon}{list.name}</NavLink></button>
        
    ))}

    </div>

        <div className='lists'>
           {/* <ReviewList /> */}
           <ShortList />
        </div>
    </div>
</div>
  )
}

export default List