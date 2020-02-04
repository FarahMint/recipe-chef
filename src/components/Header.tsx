import React , {useContext, useState} from 'react';
// ROUTER
import {Link} from "react-router-dom";
// STORE
import {Store } from "../store/reducer";

// COMPONENTS
import Search from "./Search";
import Drawer from "./Drawer"
import ToggleButton from "./ToggleButton";
import Backdrop from "./Backdrop";

/**ICON */
import {FaUtensils, FaChevronLeft} from "react-icons/fa";

export default function Header() {
  const {state }=useContext(Store);

  const [sideDrawer , setSideDrawer]= useState();

 // *********** NAVBAR ***********
  const toggleNavHandler = ()=> setSideDrawer(!sideDrawer );

  // CONTROL BACKFROP DISPLAY COMPONENT
  let backdrop;

  if( sideDrawer){
    backdrop =  <Backdrop click={toggleNavHandler}/>;
  }

    return (
       <>
        <header className="app-header">
            <div className="container">
              <div>
                <h1 className="logo"><FaUtensils /> recipe-chef</h1> 
                <ToggleButton 
              toggleNavHandler ={toggleNavHandler }
              sideDrawer={sideDrawer}/>
              </div>
            
           <Search/>
          
            </div>
        </header>
        <div className="subheader">
        <FaChevronLeft className="fa chevron-right"/> 
          <div>
            
            <p>text-info  </p>
          </div>
          <div className="img"> {state.favourites && state.favourites.length >0 ? 
    <Link to="/selection/favourites"> {state.favourites.length} saved</Link>
      
      : null} </div>
        </div>

        <Drawer 
        favourites={state.favourites}
        sideDrawer={sideDrawer}
        toggleNavHandler ={toggleNavHandler }/>
           {backdrop}
      </>
    )
}
