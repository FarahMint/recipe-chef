import React, {useContext} from 'react';
import {Store } from "../store/reducer";

/**COMPONENT */
import BtnDetails from "./BtnDetails";

 
import { IRecipeDetails} from "../interfaces"
 

/** DISPLAY RESULT FROM USER SEARCH */

export default function RecipesList(props:any):JSX.Element {  
 const {state , sideDrawer}=useContext(Store);
 const {meals} = state.recipeList;
 

    return (
        <section 
        className={!sideDrawer ? `container` :`container slide`}>
   
          <div className="grid-container">
          
               {meals && meals.map((item:  IRecipeDetails) => {
                 return (
                   <div className="item"
                     key={item.idMeal}>
                    <div>
                      <img
                        src={item.strMealThumb}
                        alt={item.strMeal}/>
                      <h4>{item.strMeal}</h4>
                    </div>

                    <BtnDetails
                      item={item}
                      />
                   </div>
                 );
               })}
               </div>
              
      
         </section>
    )
}
