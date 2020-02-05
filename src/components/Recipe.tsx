import React, {useContext, useEffect} from 'react';
import {Store } from "../store/reducer";
import ToggleFavRecipes from "./ToggleFavRecipes";

export default function Recipe(props:any):JSX.Element {

    const {state, getOneRecipe }=useContext(Store)
    const id = props.match.params.recipe_id;
     


    useEffect(()=>{
      getOneRecipe(id);
       },[]);

//   const ingredients= this.addMealToDOM(state);
    const addMealToDOM=(meal:any)=>{
      const ingredients = [];

      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(
            `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
          );
        }  
      }
      return ingredients;
    }

    const ingredients= addMealToDOM(state.recipe)

    return (   
        <section>
        {state.recipe && (
          <div className="container recipe-container">
            <div>
              <img src={state.recipe.strMealThumb} alt={state.recipe.strMeal}/>
              <h3>{state.recipe.strMeal}</h3>
                <ToggleFavRecipes
                  recipe= {state.recipe} />
            </div>
                      
                <ul className="list-group-item">
                        {ingredients.map((ing:any, index) =>  <li key={index}>{ing}</li> )}
                </ul>
                <div>
                    {state.recipe.strInstructions}
                </div>
              </div>  
            )}
        </section>
    )
}
