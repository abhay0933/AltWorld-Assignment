import React from 'react';
import { UseUser } from '../context/UserContext';

const ShortList = () => {
  const ctx  = UseUser();
  console.log(ctx.shortList);
  return (
    <div className="user-ratings">
      {
      ctx.shortList.map((user, index) => (
        <div className="user-rating" key={index}>
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

export default ShortList