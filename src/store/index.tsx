
import React, { useReducer, useEffect, useState} from 'react';

import { useHistory } from 'react-router'


import {
    FETCH_CATEGORIES,
     FETCH_CATEGORY_SELECTED, 
 GET_RECIPE,
  GET_QUERY, 
  QUERY_INPUT,
     ADD_FAV, 
    REMOVE_FAV,
    GET_NOTIFICATION
    } from "./action"; 
    
    
    import {initialState , Store, recipesReducer } from "./reducer"
    import { IAction, ICategory, IRecipeDetails} from "../interfaces";

    
    export function StoreProvider(props:any):JSX.Element{

  // *********** ROUTER ***********
  const history = useHistory();

      const localState = JSON.parse(localStorage.getItem('state') || '{}');
    
      /* if localState does not exist or empty fetch state from initialState
      !localState ? initialState  : localState
      */
          
      const [state, dispatch]= useReducer(recipesReducer,localState ? initialState  : localState );



  const [sideDrawer , setSideDrawer]= useState();

  // *********** NAVBAR ***********
   const toggleNavHandler = () => setSideDrawer(!sideDrawer );


      
        const fetchDataAction = async ()=>{
          try{
            const URL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
            const data = await fetch(URL);
            
            const dataJSON = await data.json();
         
            return dispatch({
                type: FETCH_CATEGORIES,
                payload: dataJSON.categories
              })
      
          }catch(e){
            console.log(e)
          }
        }

        const fetchCategorySelected = async (category:ICategory)=>{
          try{
            const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
            const data = await fetch(URL);
            
            const dataJSON = await data.json();
     
            return dispatch({
                type: FETCH_CATEGORY_SELECTED,
                payload: dataJSON
              })
      
          }catch(e){
            console.log(e)
          }
        }

  const getOneRecipe = async(id:any) =>  {
            try {
        
              const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
              const jsondata = await data.json();

              const meal = jsondata.meals[0];
              dispatch({
                  type:  GET_RECIPE ,
                  payload: meal
              })
        
            } catch (err) {
              console.log(err);
            }  
          };

          // SEARCH RECIPES
 const searchRecipes= async ( search:any)=>{

  dispatch({
    type: QUERY_INPUT ,
    payload:search
})
  
  try {

    const URL =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const data = await fetch(URL);
    const dataJSON = await data.json();

    if( dataJSON.meals === null){
        let msg = { 
          status:"danger", 
          text: `sorry no recipe found related to ${search}`,
          show: true
        }
       
    
        handleAlert(msg);
     return history.push("/");

    }
    dispatch({
        type:   GET_QUERY ,
        payload:dataJSON
    })

  
  } catch (err) {
    console.log(err);
  }
};

          

        const toggleFavAction= (recipe :IRecipeDetails |any ) :IAction=> {
         
          const recipeFav = state.favourites.includes(recipe);
          let withoutRecipe;

          let dispatchObj={
            type:ADD_FAV,
            payload:recipe
          }
         
          if(recipeFav){
            withoutRecipe= state.favourites.filter((r:IRecipeDetails ) => r.idMeal !== recipe.idMeal);

            dispatchObj={
              type:REMOVE_FAV,
              payload:withoutRecipe
            }
          }

          // console.log("dispatchObj:",dispatchObj)
         
          dispatch(dispatchObj);
          
          // check interface for function
         return dispatchObj;
        }
 
 
  
        useEffect(()=>{
          state.categories.length === 0 && fetchDataAction(); 
         });

        useEffect(() => {
          localStorage.setItem("state", JSON.stringify(state));
      }, [state]);



       // NOTIF HELP FUNCTION
  const handleAlert = (msg:any)=>{ 
    dispatch({type:GET_NOTIFICATION, payload:msg  })
    setTimeout(()=> dispatch({type:GET_NOTIFICATION, payload:{}}), 3000)
  
  };

        return(
        <Store.Provider 
            value ={{ 
                state,
               fetchDataAction,
                fetchCategorySelected,
                getOneRecipe,
                toggleFavAction,
                searchRecipes  ,
                sideDrawer ,
                toggleNavHandler        
                }}>
            {props.children}
        </Store.Provider>)
    }
 
 