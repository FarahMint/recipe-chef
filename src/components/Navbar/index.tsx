import React, {useContext} from "react";

/**ROUTER */
import { NavLink} from "react-router-dom"; 
/**ICONS */
import { FaChevronRight, FaHeart, FaList, FaHome} from "react-icons/fa";
/**CONTEXT */
import {Store } from '../../store/reducer';

export default function Navbar(): JSX.Element  {
    const { state }=useContext(Store);
    const {favourites}= state;

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <div className="nav-item logo">
          <NavLink to="/" className="nav-link">
            <FaChevronRight/>
          </NavLink>
        </div>

        <li className="nav-item">
          <NavLink to="/" className="nav-link home">
          <FaHome/>
            <span className="link-text">home</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/" className="nav-link">
          <FaList/>
            <span className="link-text">categories</span>
          </NavLink>
        </li>
      
        <li className="nav-item">
                <NavLink 
                to="/favourites"
                className="nav-link"
                > <FaHeart/> 
                           <span className="link-text">

                   {favourites.length > 0 ?
                    `${favourites.length} recipes saved`
                   : `recipe box`
                   }
                </span>
                </NavLink>
        </li>
      </ul>
    </nav>
  )}