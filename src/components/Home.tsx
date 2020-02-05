import React ,  {useContext}from 'react';
import { Link } from "react-router-dom";

import {Store } from "../store/reducer";


import {  ICategory} from "../interfaces";

export default function Home(props:any): JSX.Element {

    const {state }=useContext(Store)
  
    return (

      <section className="container">
      <ul className="grid-container">
     {
       state.categories.map((item : ICategory) =>{
         return(
         <li className="item" key={item.idCategory}>
           <div>
          
             <img src={item.strCategoryThumb} alt={item.strCategory}/>
            
             <h2>{item.strCategory}</h2>
             <Link to={`/${item.strCategory}`}  className="btn-primary recipes-link">See recipes </Link>
            
           </div>
           {/* <button 
           type="button" 
           onClick={()=> toggleFavAction(item)}>
            {state.favourites.find((fav: ICategory  )=>
               fav.idCategory === item.idCategory) ? `unfav`:`fav` }
           </button> */}
         </li>
         )
       })
     }
     </ul>
      </section>
    )
}
