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

  return (
    <BrowserRouter>
    <div className="App">
      <div className="content">
      <Header/>
      <Switch>
        <Route  
          exact 
          strict
          path="/" 
          component={Home}/>
        <Route 
          exact
          strict
          path="/search/:query" 
          component={RecipesList}
              />
        <Route 
          exact
          strict
          path="/favourites" 
          component={Favourites}
              />

        <Route  
          exact
          strict 
          path="/:category" 
          component={Category}/>
        
        <Route 
          exact
          
          path="/:category/:recipe_id/" 
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
