import React , {useContext} from 'react';
import { Route, Switch } from "react-router-dom";
 
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Home from "./components/Home";
  import Category from "./components/Category";
  import RecipesList from "./components/RecipesList";
  import Recipe from "./components/Recipe";
  import Favourites from "./components/Favourites";
  import Notifications from "./components/Header/Notifications"; 
  import Error from "./components/Error";


  import {Store } from "./store/reducer";
  
  

 
  export default function App(props:any):JSX.Element {


  const {state }=useContext(Store);
  const {notification :{text, status, show}} = state;

  let notificationMsg = (text!=="" && show === true) && <Notifications 
  status = {status}
  text= {text}
  />;
 

  return (
  
    <div className="App">
      <div className="content">
      <Header/>
 
      {notificationMsg}

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
  );
}
