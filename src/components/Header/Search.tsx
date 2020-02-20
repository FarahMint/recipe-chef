import React, {useState, useContext } from 'react';

import {
    withRouter
  } from 'react-router-dom'
 
/**ICON */
import {FaSearch } from 'react-icons/fa';
/**STORE */
import {Store } from '../../store/reducer';

/**
 * disable btn for search
 * https://stackoverflow.com/questions/52868369/enable-or-disable-a-button-based-on-a-textfield-value-in-react-js
 */ 


function Search(props:any): JSX.Element {
    
      const { searchRecipes }=useContext(Store)
      const [input, setInput] = useState("");
     
      // check input to enable btn
      const disabled = !input.length;
      


      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        
        searchRecipes(input);
        props.history.push(`/search/${input}`);
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
            placeholder="what would you like to cook?"
            className="search"
          />
        

          <button 
          className="search__btn" 
          type="submit" 
         disabled={disabled}
          >

           <FaSearch  className="icon-search"/>
          </button>

        </form>
          {/* {(props.error.msg && props.error.show)&& <p className="error">{props.error.msg}</p> } */}
      </div>
    )
}
    
export default withRouter(Search);