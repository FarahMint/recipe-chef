import React, {useContext} from 'react';
import {Store } from "../store/reducer";
import { Link } from "react-router-dom";

import { IRecipeDetails } from '../interfaces';
import ToggleFavRecipes from "./ToggleFavRecipes";

export default function Favourites():JSX.Element  {
    const {state }=useContext(Store);

    return (
        <div className="grid-container">
             { (state.favourites && state.favourites.length > 0 )? null :  <h1>Select your favorite recipes</h1>}

            {state.favourites.map((item: IRecipeDetails) =>(   
                <div key={item.idMeal} className="item">
                   <img src={item.strMealThumb} alt={item.strMeal}/>
                   <ToggleFavRecipes recipe= {item} />
                   <Link to={`/selection/${item.strCategory}/${item.idMeal}`}>
                   <h3> {item.strMeal}</h3>  
                   </Link>
               </div>)
            )}
        </div>
    )
}
