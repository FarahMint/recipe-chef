 
import React ,  { useContext}from 'react';
 

import {Store } from "../../store/reducer";
 

/**ICON */
import { FaChevronLeft} from "react-icons/fa";
 
import {
  useLocation, useHistory
} from 'react-router'


export default function Subheader(props:any): JSX.Element {
  const {state }=useContext(Store);


 const location = useLocation();
 const history = useHistory();

 /** need to works on the logic
  * 1rst check if pathname is / so text= categories
  * 2nd check if pathname is a slash followed by string remove slash and text = string
  * 3rd check if text without slash is = to recipeidMeal so text = recipe name (strMeal)  
  */  

 const DisplayText = (str:string, selection ="/", text="")=>{
   let slashPosition = str.lastIndexOf(selection);

    if(str === selection ) return text = "categories";
  
    str.includes(selection) && ( text = str.slice(slashPosition).replace(/^\//, ''))

     if (state.recipe.idMeal === text){
       text = state.recipe.strMeal;
     };
    
   return text;
 }

  /**
   * need to work on the logic for the back button
   */

  const title = DisplayText(location.pathname)
    return (
       <>
        <div className="subheader">
          {
            title !=="categories" && ( <FaChevronLeft 
              className="fa chevron-right" onClick={() => history.goBack()}
              /> )
          }
           
            <div> 
             <p>{title }</p>
            </div>
 
        </div>
      </>
    )
}
 