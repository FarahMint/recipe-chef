
import React, { useReducer, useEffect} from 'react';

import { useHistory } from 'react-router'


import { FETCH_CATEGORIES,
  FETCH_RANDOM_MEAL,
   FETCH_CATEGORY_SELECTED, GET_RECIPE,GET_QUERY, QUERY_INPUT, ADD_FAV, REMOVE_FAV, GET_NOTIFICATION } from "./action"; 
    
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



  //const [sideDrawer , setSideDrawer]= useState();

  // *********** NAVBAR ***********
  // const toggleNavHandler = () => setSideDrawer(!sideDrawer );


      
  const getRandomMeal = async ()=>{
    try{
        const URL = `https://www.themealdb.com/api/json/v1/1/random.php`;
        const data = await fetch(URL);
            
        const response = await data.json();

      // console.log(response)
    

    dispatch({
              type: FETCH_RANDOM_MEAL,
              payload:response
            
      })          
        }catch(e){
            console.log(e)
      }
    }
  // const getCategoryList = async ()=>{
  //   try{
  //       const URL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
  //       const data = await fetch(URL);
            
  //       const {categories} = await data.json();

  //      const numOfRecipesByCat =await getNumOfRecipePerCat(categories); 
  //     // console.log(numOfRecipesByCat)
    

  //   dispatch({
  //             type: FETCH_CATEGORIES,
  //             payload:{
  //               categories,
  //               numOfRecipesByCat
  //             },
  //     })          
  //       }catch(e){
  //           console.log(e)
  //     }
  //   }

    const getNumOfRecipePerCat = async (categories:any)=>{

      let list = categories.map((item:any) =>item.strCategory);
     
      try{
        return Promise.all(list.map(async (item:string) =>  {
          
        let data =await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`);

        let {meals} = await data.json();
      
         return {number: meals.length, name:item};
      
      }));
      }catch(e){
        console.log(e);
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
        
            let msg = { 
              status:"success", 
              text: `you saved a recipe in your favourite`,
              show: true
            }
            handleAlert(msg);
      

          if(recipeFav){
            withoutRecipe= state.favourites.filter((r:IRecipeDetails ) => r.idMeal !== recipe.idMeal);

            dispatchObj={
              type:REMOVE_FAV,
              payload:withoutRecipe
            }

            let msg = { 
              status:"danger", 
              text: `you removed a recipe from your favourite`,
              show: true
            }
            handleAlert(msg);

          }

          // console.log("dispatchObj:",dispatchObj)
         
          dispatch(dispatchObj);
          
          // check interface for function
        return dispatchObj;
        }
 
 
  
        useEffect(()=>{
        
         async function getCategoryList(){
            try{
                const URL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
                const data = await fetch(URL);
                    
                const {categories} = await data.json();
        
               const numOfRecipesByCat =await getNumOfRecipePerCat(categories); 
              // console.log(numOfRecipesByCat)
              state.recipe !== {} && getRandomMeal();
        
            dispatch({
                      type: FETCH_CATEGORIES,
                      payload:{
                        categories,
                        numOfRecipesByCat
                      },
              })          
                }catch(e){
                    console.log(e)
              }
            }
            state.categories.length === 0 && getCategoryList();
      }, [state.categories.length, state.recipe]);

        useEffect(() => {
          localStorage.setItem("state", JSON.stringify(state));
      }, [state]);



       // NOTIF HELP FUNCTION
  const handleAlert = (msg:any)=>{ 
    dispatch({type:GET_NOTIFICATION, payload:msg  })
    setTimeout(()=> dispatch({type:GET_NOTIFICATION, payload:{}}), 3000)
  
  };


// SUM OF ALL RECIPES AVAILABLE
  const total =()=>{
        let total:number =0;
        if(state.numOfRecipesByCat!== undefined && state.numOfRecipesByCat!=={}){
        for(let i in  state.numOfRecipesByCat){
             total += state.numOfRecipesByCat[i].number
            }
            return total;
        }else if(total === 0){
            return null;
        }
    }
// SUM OF RECIPES BY CATALOGUES
    const numOfRecipes= (item:string)=>{
      let num :number=0;
       if(state.numOfRecipesByCat!== undefined && state.numOfRecipesByCat!=={}){
         for(let i in state.numOfRecipesByCat){
           if(state.numOfRecipesByCat[i].name === item){
             num =state.numOfRecipesByCat[i].number;
           }
         }
       return num
     }
    }

        return(
        <Store.Provider 
            value ={{ 
                state,
                fetchCategorySelected,
                getOneRecipe,
                toggleFavAction,
                searchRecipes  ,
                numOfRecipes,
                total    
                }}>
            {props.children}
        </Store.Provider>)
    }
 
 