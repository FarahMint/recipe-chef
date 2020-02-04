import React, {useState, useContext } from 'react';

import {
    withRouter
  } from 'react-router-dom'
 
/**ICON */
import {FaSearch } from 'react-icons/fa';
/**STORE */
import {Store } from '../store/reducer';

 
function Search(props:any): JSX.Element {

      /**get context from store */
    
      const { searchRecipes }=useContext(Store)
      /**state hook for the form */
      const [input, setInput] = useState("");
      
      /** when user submit the form*/
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        searchRecipes(input);
         props.history.push("/search")

        // NEED TO WORK ON THAT LOGIC
        // if (!props.error.msg && !props.error.show){
        //   props.scrollToResult();
        // }
        //  if there is no error page scroll
        /**clear input field after user search */

        setInput("");
         };

        
 

    return (
      <div className="form-container">
        <form className="form-group" 
        onSubmit={handleSubmit} >
         
          <label htmlFor="search" hidden>Search</label>
          <input
            name="search"
            type="text" 
            value={input}
           onChange={(e)=>   setInput(e.target.value)}
            placeholder="input ingredients to find recipe...."
            className="search"
          />
        

          <button 
          className="search__btn" type="submit">
           <FaSearch  className="icon-search"/>
          </button>

        </form>
          {/* {(props.error.msg && props.error.show)&& <p className="error">{props.error.msg}</p> } */}
      </div>
    )
}
    
export default withRouter(Search);