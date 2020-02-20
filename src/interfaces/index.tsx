export interface IState {
    categories: Array<ICategory>
    selectedCat:Array<IRecipe>
    recipe: {},
    recipeList:Array<any>,
    favourites: Array<any>,
    query:string
   notification: INotif
}

export interface IAction {
    type:string,
    payload:{} | any,
}
export interface INotif {
  status:string, 
  text: string,
  show?:boolean,
}

export interface ICategory{
    idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string,
  }

export interface IRecipe{
strMeal:  string
strMealThumb:  string
idMeal: string
  }
export interface IRecipeDetails{
idMeal:string,
strMeal: string,
strDrinkAlternate: null
strCategory: string,
strArea: string,
strInstructions:string,
strMealThumb: string,
strTags: string,
strYoutube: string,
strSource: string
 
  }

 
 

 


 
 
 