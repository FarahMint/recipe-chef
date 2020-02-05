import React from 'react';
import ToggleButton from "./ToggleButton";
import Search from "./Search";


/**ICON */
import {FaUtensils} from "react-icons/fa";
 /* Router*/
import {Link} from 'react-router-dom';

function Header(props:any): JSX.Element {
    return (

        <header className="app-header">
          <div className="container">
            <div>
              <Link to="/">
              <h1 className="logo"><FaUtensils /> recipe-chef</h1> 
              </Link>
              <ToggleButton 
              toggleNavHandler ={props.toggleNavHandler }
              sideDrawer={props.sideDrawer}/>
            </div> 
            <Search/>
          </div>
        </header>
      
    )
}
export default Header;