import React, {useContext} from 'react';
/**ICON */
import {FaHeart, FaList, FaUtensilSpoon}  from "react-icons/fa";

import {Link} from "react-router-dom";

import {Store } from "../store/reducer";


    export default function Menu(): JSX.Element  {

    const {state , total}=useContext(Store);
    const {  numOfCategory} = state;

    const allRecipes= total();
    return (
        <>
            <div className="categorie-available">
            <div className="area-1">
            <FaUtensilSpoon
                 aria-label="pick from variety of recipes"/>

            <Link to="/">     
            <h2>
              {allRecipes} recipes</h2>
            </Link>
            </div>
            <div className="area-2">
            <FaList aria-label="categories available"/>
            <Link to="/"> 
                <h2>{ numOfCategory? numOfCategory: null} categories</h2>
            </Link>
    
            </div>
            <div className="area-3">
            <FaHeart aria-label="pick your favorites"/>
            <Link to="/favourites">
                {state.favourites&&state.favourites.length > 0 && state.favourites.length} 
                <h2>bookmark</h2>
            </Link>
            </div>
        </div>

        </>
    )
}
