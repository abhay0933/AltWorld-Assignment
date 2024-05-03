import React from 'react'
import SideBar from '../component/SideBar'
// import SalesList from '../component/SalesList'
import List from '../component/List'
import Details from '../component/Details'

const Main = () => {
  return (
    <div className='homeContainer'>
      <div className='sideBar'>
        <SideBar />
      </div>
      <div className="rightSideContainer">
        <div className="saleList">
            <List />
        </div>
        <div className="details">
           <Details />
        </div>
      </div>
    </div>
  )
}

export default Main