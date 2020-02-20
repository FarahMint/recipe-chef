import React ,  { useContext }from 'react';

/* Router*/
import {NavLink} from 'react-router-dom';


/**ICON */
import {  FaHeart, FaList} from "react-icons/fa";
/**STORE */
import {Store } from '../store/reducer';
/**ICON */
import {FaUtensils} from "react-icons/fa";



export default function Nav(props:any): JSX.Element {

    const { state }=useContext(Store);
    const {favourites}= state;
     // if sidebar open add css class
 let drawerClasses= "side-drawer";
 if(props.sideDrawer){
   drawerClasses="side-drawer open";
 }

    return (
    <>
     <nav className={drawerClasses}>
        <div className="container">
            <div className="logo">
                <FaUtensils/>r-c
            </div>
            <ul className="toolbar_navigation-items">
                <li>
                <NavLink to="/" onClick={()=>props.toggleNavHandler()}><FaList className="logo"/>categories</NavLink>    
                </li>
                <li>
                    {
                       favourites.length > 0 && (
                        <NavLink to="/favourites" onClick={()=>props.toggleNavHandler()}> <FaHeart className="logo"/> {favourites.length} recipes saved
                          </NavLink>
                       )  
                    }
                
                </li>
            </ul>
        </div>
    </nav>
    </>
    )
}