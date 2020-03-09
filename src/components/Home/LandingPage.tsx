import React , {useContext } from 'react';

// CONTEXT
import {Store } from "../../store/reducer";

// COMPONENT
import Menu from "./Menu";

export default function LandingPage(): JSX.Element  {
    const {state }=useContext(Store);
    const {recipe} = state;

    return (
        <div className="landpage-container">
            {
            recipe.meals &&recipe.meals.map((meal:any) =>(   
            
            <article 
            className="main-content" 
            key={meal.idMeal}>    
                <img src={meal.strMealThumb}
                alt={meal.strMeal}/>
                
                <div className="label">
                    <span className="badge">Recipe of the Day</span> 
                    <h3>{meal.strMeal} </h3>
                </div>
                <Menu/>
            </article>
            ))
            }
    </div>
    )
}
