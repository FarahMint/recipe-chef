import React ,  { useContext }from 'react';

/* Router*/
import {NavLink} from 'react-router-dom';


/**ICON */
import {  FaBookmark, FaList} from "react-icons/fa";
/**STORE */
import {Store } from '../store/reducer';



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
            <ul className="toolbar_navigation-items">
                <li>
                <NavLink to="/" onClick={()=>props.toggleNavHandler()}><FaList className="logo"/>categories</NavLink>    
                </li>
                <li>
                    {
                       favourites.length > 0 && (
                        <NavLink to="/favourites" onClick={()=>props.toggleNavHandler()}> <FaBookmark className="logo"/> {favourites.length} recipes saved
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