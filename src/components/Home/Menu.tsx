import React, {useContext} from 'react';

/**ICON */
import {FaHeart, FaList, FaUtensilSpoon, FaPlus}  from "react-icons/fa";

/**ROUTER */
import {Link} from "react-router-dom";

/**CONTEXT */
import {Store } from "../../store/reducer";


    export default function Menu(): JSX.Element  {

    const {state , total}=useContext(Store);
    const {  numOfCategory} = state;

    const allRecipes= total();
    return (
        <>
            <div className="categorie-available">
                <FaPlus/>
            <div className="area-1">
            <FaUtensilSpoon
                 aria-label="pick from variety of recipes"/>

            <Link to="/search">     
            <span>
              {allRecipes} recipes</span>
            </Link>
            </div>
            <div className="area-2">
            <FaList aria-label="categories available"/>
            <Link to="/"> 
                <span>{ numOfCategory? numOfCategory: null} categories</span>
            </Link>
    
            </div>
            <div className="area-3">
            <FaHeart aria-label="pick your favorites"/>
            <Link to="/favourites">
                {state.favourites&&state.favourites.length > 0 ? state.favourites.length : (<span>Save To Recipe Box</span>)} 
            </Link>
            </div>
        </div>

        </>
    )
}
