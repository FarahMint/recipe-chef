import React, {useContext} from 'react';
import {Store } from "../../store/reducer";
/**ICON */
import {  FaHeart} from "react-icons/fa";

 import {IRecipeDetails} from "../../interfaces";

export default function ToggleFavRecipes(props:any):JSX.Element {

    const {state, toggleFavAction}=useContext(Store)
 
    return (
        <button 
        type="button"
        onClick={()=> toggleFavAction(props.recipe)}>
              {state.favourites.find((fav: IRecipeDetails  )=>
                fav.idMeal === props.recipe.idMeal) ? <FaHeart 
                className="btn-fav active"
                title="unlike"
                />:<FaHeart className="btn-fav" title="like"/> }
      </button>
    )
}
