import React, {useContext, useEffect} from 'react';
import {Store } from "../store/reducer";
import { Link } from "react-router-dom";

import ToggleFavRecipes from "./ToggleFavRecipes";

  import { IRecipe} from "../interfaces";



export default function Category(props:any):JSX.Element {  


 const {state,  fetchCategorySelected }=useContext(Store)
 const category = props.match.params.category;

useEffect(()=>{
    fetchCategorySelected(category);
 
   }, []);

   const { meals } = state.selectedCat;

    return (
    <section>
       <h2 className="title__recipes-list">{category}</h2>
       <div className="grid-container">
            {meals&& meals.map((item: IRecipe) => {
              return (
                <div className="item"
                  key={item.idMeal}
                >
                  <ToggleFavRecipes
                  recipe= {item} />
                    <div>
                      <Link to={`/selection/${category}/${item.idMeal}`}>
                        <img
                          src={item.strMealThumb}
                          alt={item.strMeal}/>
                          <h3>{item.strMeal}</h3>
                      </Link>
                
                 
                  </div>
                </div>
              );
            })}
            </div>
        </section>
    )
}
