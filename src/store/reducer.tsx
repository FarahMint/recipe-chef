
import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY_SELECTED, 
    GET_RECIPE,
    GET_QUERY, 
    ADD_FAV, 
    REMOVE_FAV
    } from "./action"; 
    
    
    import  {createContext} from 'react';
    
    import {IState,IAction } from "../interfaces"
     
    
    
    export const initialState : IState ={
        categories:[],
        selectedCat:[],
        recipe:{},
        recipeList:[],
        favourites:[],
        query:""
    };
    
    
    
    export const Store= createContext <IState |any>(initialState);

    
     function recipesReducer(state: IState , action:IAction):IState {
         switch(action.type){
            case FETCH_CATEGORIES:
                return {
                    ...state,
                     categories: action.payload
                }
            case  FETCH_CATEGORY_SELECTED:
                return {
                    ...state,
                    selectedCat: action.payload
                }
            case GET_RECIPE:
                return {
                    ...state,
                    recipe: action.payload
                }
            case GET_QUERY:
                return {
                    ...state,
                    recipeList: action.payload
                }
            case ADD_FAV:
          
                return {
                    ...state,
                    favourites: [ ...state.favourites,action.payload],
                 
                }
            case  REMOVE_FAV:
                 
                return {
                    ...state,
                    favourites: action.payload
                }
            case "QUERY_INPUT":
                 
                return {
                    ...state,
                    query: action.payload
                }
                
    
             default : return state;
         }
     };

    

     export { recipesReducer};
    
    // export function StoreProvider(props:any):JSX.Element{
    
    //     const [state, dispatch]= useReducer(reducer, initialState);
    //     return(
    //     <Store.Provider 
    //         value ={{ state ,dispatch}}>
    //         {props.children}
    //     </Store.Provider>)
    // }