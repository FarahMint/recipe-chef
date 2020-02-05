import React, {useContext, useEffect} from 'react';
import {Store } from "../store/reducer";
import { Link } from "react-router-dom";

import { IRecipe} from "../interfaces";



export default function Category(props:any):JSX.Element {  


 const {state,  fetchCategorySelected }=useContext(Store)
 const category = props.match.params.category;

useEffect(()=>{
    fetchCategorySelected(category);
 
   }, []);

   const { meals } = state.selectedCat;

    return (
    <section className="container category-container">
       <div className="grid-container">
            {meals&& meals.map((item: IRecipe) => {
              return (
                <div className="item"
                  key={item.idMeal}
                >
                    <div>
                        <img
                          src={item.strMealThumb}
                          alt={item.strMeal}/>
                          <h3>{item.strMeal}</h3>

                          <Link to={`/${category}/${item.idMeal}`} className="btn-primary recipes-link">details
                      </Link>
                
                 
                  </div>
                </div>
              );
            })}
            </div>
        </section>
    )
}
