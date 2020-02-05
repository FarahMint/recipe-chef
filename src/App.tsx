import React  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
 
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Home from "./components/Home";
  import Category from "./components/Category";
  import RecipesList from "./components/RecipesList";
  import Recipe from "./components/Recipe";
  import Favourites from "./components/Favourites";
  import Error from "./components/Error";

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <div className="content">
      <Header/>
      <Switch>
        <Route  
          path="/" 
          exact
          component={Home}/>
        <Route 
          exact
          path="/favourites" 
          component={Favourites}/>

        <Route 
          path="/search/:query" 
          exact
          component={RecipesList}/>

        <Route  
          path="/:category" 
          exact
          component={Category}/>
        
        <Route 
          path="/:category/:recipe_id/" 
          exact
          component={Recipe}/>
         {/* ERROR  - when no match*/}
        
         <Route component={Error}></Route>

      </Switch>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
