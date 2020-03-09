import React ,  {useContext}from 'react';
import { Link } from "react-router-dom";

 
import {Store } from "../../store/reducer";

import {  ICategory} from "../../interfaces";

export default function CategoryList(): JSX.Element {

    const {state, numOfRecipes }=useContext(Store);
    
    return (
    <section className="container category-container">
        <h2>categories</h2>
        <p>recipes, guides and more</p>
        
        <ul className="grid-container">
          {
            state.categories.map((item : ICategory) =>{
              return(
              <li className="item" key={item.idCategory}>
                <div>
                
                  <img src={item.strCategoryThumb} alt={item.strCategory}/>
                  
                  <h3>{item.strCategory}</h3>
                    
                  <Link to={`/${item.strCategory}`}  className="btn-primary recipes-link">See  {numOfRecipes(item.strCategory)}  recipes </Link>
                  
                </div>
              </li>
              )
            })
          }
          </ul>
        </section>
    )
}
