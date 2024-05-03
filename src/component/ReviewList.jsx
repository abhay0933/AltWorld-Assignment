import React from 'react'
import DummyData from '../data/DummyData'
import { UseUser } from '../context/UserContext';
import { useState } from 'react';

const ReviewList = () => {

    const ctx = UseUser();
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);

    const showDetails = (user, index) => {
        ctx.setSelectedUser(user);
        // console.log(ctx.selectedUser);
        setSelectedUserIndex(index);
      };
  return (
    <div className="user-ratings">
      {DummyData.map((user, index) => (
        <div className='user-rating' onClick={()=>showDetails(user)} style={{ backgroundColor: selectedUserIndex === index ? 'gray' : ''}} key={index} >
          <img src={user.image} alt="Profile" className="profile-image" />
          <div className="user-details">
            <h5>{user.name}</h5>
            <p>{user.email}</p> 
          </div>
          <h5 style={{color: user.rating < "50%" ? "#ECB22E" : "#2EBD59" }} >{user.rating}</h5>
        </div>
      ))}
    </div>
  )
}

export default ReviewList;