import {
FETCH_CATEGORIES,
FETCH_CATEGORY_SELECTED, 
GET_RECIPE,
GET_QUERY, 
ADD_FAV, 
REMOVE_FAV
} from "./store/action"; 


import React, {createContext, useReducer} from 'react';

import {IState,IAction } from "./interfaces"
 


const initialState : IState ={
    categories:[],
    selectedCat:[],
    recipes:[],
    favourites:[]
};



export const Store= createContext <IState |any>(initialState);


 function reducer(state: IState , action:IAction):IState {
     switch(action.type){
        case FETCH_CATEGORIES:
            return {
                ...state,
                 categories: action.payload
            }
        case ADD_FAV:
            return {
                ...state,
                favourites: [ ...state.favourites, action.payload]
            }
        case  REMOVE_FAV:
            return {
                ...state,
                favourites: action.payload
            }

         default : return state
     }
 };

export function StoreProvider(props:any):JSX.Element{

    const [state, dispatch]= useReducer(reducer, initialState);
    return(
    <Store.Provider 
        value ={{ state ,dispatch}}>
        {props.children}
    </Store.Provider>)
}