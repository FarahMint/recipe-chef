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
           <Link to={`/selection/${item.strCategory}`}>
             <img src={item.strCategoryThumb} alt={item.strCategory}/>
             </Link>
             <h2>{item.strCategory}</h2>
           
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
