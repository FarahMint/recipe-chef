import React 
//  , {useContext, useEffect} 
from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

  // import {Store } from "./store/reducer";
  // import { ICategory} from "./interfaces";
 
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Home from "./components/Home";

  import Category from "./components/Category";
  import RecipesList from "./components/RecipesList";
  import Recipe from "./components/Recipe";
  import Favourites from "./components/Favourites";

const App = () => {

//  const {state, fetchDataAction}=useContext(Store)

//  const fetchDataAction = async ()=>{
//   const URL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
//    const data = await fetch(URL);
   
//    const dataJSON = await data.json();
 
//    return dispatch({
//      type:"FETCH_CATEGORIES",
//      payload: dataJSON.categories
//    })
//  }

//  useEffect(()=>{
//   state.categories.length === 0 && fetchDataAction(); 
//  });
 
//  const toggleFavAction= (category : ICategory ): IAction => {
//  const catFav = state.favourites.includes(category);
//  let favWithoutCat;

//  let dispatchObj={
//   type:"ADD_FAV",
//   payload:category
//  }

//    if(catFav){
//  favWithoutCat= state.favourites.filter((c:ICategory ) => c.idCategory !== category.idCategory);

//       dispatchObj={
//         type:"REMOVE_FAV",
//         payload:favWithoutCat
//       }
//     }

//     console.log("dispatchObj:",dispatchObj)
//   return dispatch(dispatchObj);
// }
  return (
    <BrowserRouter>
    <div className="App">
      <div className="content">
      <Header/>
      <Switch>
      <Route  
        exact 
        path="/" 
        component={Home}/>
      <Route 
        exact
        path="/search" 
        component={RecipesList}
            />
      <Route 
        exact
        path="/selection/favourites" 
        component={Favourites}
            />

      <Route  
        exact 
        path="/selection/:category" 
        component={Category}/>
      
      <Route 
        exact
        path="/selection/:category/:recipe_id/" 
        component={Recipe}
            />

      </Switch>
      </div>
 


      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
