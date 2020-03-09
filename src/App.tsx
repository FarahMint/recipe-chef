import React , {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
 
  import Header from "./components/Header/Header";
  import Navbar from"./components/Navbar";
 
  import Footer from "./components/Footer";
  import Home from "./components/Home";
 
  import Category from "./components/Category/SingleCategory";
  import RecipesList from "./components/Recipes/RecipesList";
  import Recipe from "./components/Recipes/SingleRecipe";
  import Favourites from "./components/Recipes/Favourites";
  import Notifications from "./components/Notifications"; 
  import Error from "./components/Error";


  import {Store } from "./store/reducer";
  
  

 
  export default function App(props:any):JSX.Element {
    // https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
    // still working on it
    const [dimensions, setDimensions] = useState({ 
      height: window.innerHeight,
      width: window.innerWidth
    })
    

  const {state }=useContext(Store);
  const {notification :{text, status, show}} = state;

  

  let notificationMsg = (text!=="" && show === true) && <Notifications 
  status = {status}
  text= {text}
  />;

 useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    
    }

    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize)
    
  }, [dimensions])


  return (
  
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="content">
 
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
      {
        dimensions && dimensions.width > 678 && 
        <Footer/>  
      }
     
    </div>
  );
}
