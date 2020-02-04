import React, {useContext} from 'react';
import {Store } from "../store/reducer";
import { Link } from "react-router-dom";

import { IRecipeDetails} from "../interfaces"
 



export default function RecipesList(props:any):JSX.Element {  
 const {state }=useContext(Store)
 const {meals} = state.recipeList

 
 
    return (
        <section className="container">
          {!meals ? <p className="info-no-result">sorry no result were found please try another ingredient</p>
          :
          <>
          <h2 className="title__recipes-list">{state.query}</h2>
          <div className="grid-container">
               {meals && meals.map((item:  IRecipeDetails) => {
                 return (
                   <div className="item"
                     key={item.idMeal}>
                       <div>
                         <Link to={`/selection/${item.strCategory}/${item.idMeal}`}>
                           <img
                             src={item.strMealThumb}
                             alt={item.strMeal}/>
                             <h4>{item.strMeal}</h4>
                         </Link>
                     </div>
                   </div>
                 );
               })}
               </div>
               </>
          }
      
         </section>
    )
}
