import React from "react";
import SideBar from "../component/SideBar";
import SalesList from "../component/SalesList";
import Details from "../component/Details";
// import NavBar from "../component/NavBar";

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='sideBar'>
        <SideBar />
      </div>
      <div className="rightSideContainer">
        <div className="saleList">
            <SalesList />
        </div>
        <div className="details">
           <Details />
        </div>
      </div>
    </div>
  );
};

export default Home;
