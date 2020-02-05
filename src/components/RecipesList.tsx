import React, {useContext} from 'react';
import {Store } from "../store/reducer";
import { Link } from "react-router-dom";

import { IRecipeDetails} from "../interfaces"
 



export default function RecipesList(props:any):JSX.Element {  
 const {state }=useContext(Store);
 const {meals} = state.recipeList;

    return (
        <section className="container">
          {!meals ? <p className="info-no-result">sorry no result were found please try another ingredient</p>
          :
          <>
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
                     <Link to={`/${item.strCategory}/${item.idMeal}`} className="btn-primary recipes-link">details
                      </Link>
                   </div>
                 );
               })}
               </div>
               </>
          }
      
         </section>
    )
}
