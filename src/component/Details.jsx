import React from 'react'
import { UseUser } from '../context/UserContext'

const Details = () => {
    const ctx = UseUser();
    // console.log(ctx);

    const shortlistuser = (user) => {
       
            ctx.setShortList([...ctx.shortList, user]); // Assuming setShortList is defined in your context
        
        console.log(user);
    }

  return (
        <div className='details-container'>
           {
            ctx.selectedUser == null ? (
                <>
                <h1>NO DATA</h1>
                <p>Please Select Candidate</p>
                </>
            ): (
         <div className='details-main-container'>
            <div>
        <div className="details-rating">
          <img src={ctx.selectedUser.image} alt="Profile" className="profile-image" />
          <div className="user-details">
            <h5>{ctx.selectedUser.name}</h5>
            <p>{ctx.selectedUser.email}</p> 
          </div>
          <h2 style={{color: ctx.selectedUser.rating < "50%" ? "#ECB22E" : "#2EBD59" }} >{ctx.selectedUser.rating}</h2>
        </div> 
        <div className='progress-bars'>
        <div className="progress-item">
        <span>Behavioural</span>
        <div className="progress">
          <div  className= {ctx.selectedUser.behaviour <= 6 ? "yellow-fill": "progress-fill"} style={{ width: `${ctx.selectedUser.behaviour *10}%` }}></div>
        </div>
        <p style={{color: ctx.selectedUser.behaviour <= "6" ? "#ECB22E" : "#2EBD59" }}>{ctx.selectedUser.behaviour}/10</p>
      </div>
      <div className="progress-item">
        <span>Communication</span>
        <div className="progress">
          <div className= {ctx.selectedUser.communication <= 6 ? "yellow-fill": "progress-fill"} style={{ width: `${ctx.selectedUser.communication *10}%` }}></div>
        </div>
        <p style={{color: ctx.selectedUser.communication <= "6" ? "#ECB22E" : "#2EBD59" }}>{ctx.selectedUser.communication}/10</p>
      </div>
      <div className="progress-item">
        <span>Situation handling</span>
        <div className="progress">
          <div  className= {ctx.selectedUser.situationhandling <= 6 ? "yellow-fill": "progress-fill"} style={{ width: `${ctx.selectedUser.situationhandling *10}%` }}></div>
        </div>
        <p style={{color: ctx.selectedUser.situationhandling <= "6" ? "#ECB22E" : "#2EBD59" }}>{ctx.selectedUser.situationhandling}/10</p>
      </div>
        </div>
        <div className="about-candidate">
            <div className='about'>
            <h4>About</h4>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sed?</p>
            </div>
            <div className='about'>
            <h4>Experience</h4>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sed?</p>
            </div>
            <div className='about'>
            <h4>Hobbies</h4>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sed?</p>
            </div>
            <div className='about'>
            <h4>Introduction</h4>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sed?</p>
            </div>
        </div>
        <div className='shortlist-btn'>
            <button onClick={()=> shortlistuser(ctx.selectedUser)}>Shortlist</button>
        </div>
        </div>
        <div className='questionsvideo'>
           <img src={ctx.selectedUser.image} />
        </div>
        </div>
            )
           }
        </div>
  )
}

export default Details;