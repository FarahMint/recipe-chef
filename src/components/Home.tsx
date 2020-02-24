import React ,  {useContext}from 'react';
import { Link } from "react-router-dom";

import LandingPage from "./LandingPage";

import {Store } from "../store/reducer";

import {  ICategory} from "../interfaces";

export default function Home(): JSX.Element {

    const {state, numOfRecipes }=useContext(Store);
    
    return (
      <>
        <LandingPage />
          <section className="container">
             
            <ul className="grid-container">
          {
            state.categories.map((item : ICategory) =>{
              return(
              <li className="item" key={item.idCategory}>
                <div>
                
                  <img src={item.strCategoryThumb} alt={item.strCategory}/>
                  
                  <h2>{item.strCategory}</h2>
                    
                  <Link to={`/${item.strCategory}`}  className="btn-primary recipes-link">See  {numOfRecipes(item.strCategory)}  recipes </Link>
                  
                </div>
              </li>
              )
            })
          }
          </ul>
        </section>
      </>
    )
}
