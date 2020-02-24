import React, {useContext, useEffect} from 'react';
import {Store } from "../store/reducer";

/**COMPONENT */
import BtnDetails from "./BtnDetails";

import { IRecipe} from "../interfaces";



export default function Category(props:any):JSX.Element {  


 const {state,  fetchCategorySelected }=useContext(Store)
 const category = props.match.params.category;



useEffect(()=>{
    fetchCategorySelected(category);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const { meals } = state.selectedCat;
 
    return (
    <section className="container category-container">
       <div className="grid-container">
          {meals&& meals.map((item: IRecipe) => {
            return (
              <div className="item"
                  key={item.idMeal}>
                <div>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}/>
                  <h3>{item.strMeal}</h3>
                 
                 <BtnDetails
                 category={category}
                 item={item}/>
                </div>
              </div>
          );
        })}
      </div>
    </section>
    )
}
