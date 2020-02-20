import React , {useContext
  // , useState
} from 'react';
// STORE
import {Store } from "../../store/reducer";

// COMPONENTS
import SubHeader from "./SubHeader";
import Header from "./Header";
 
import Drawer from "./Drawer"
import Backdrop from "./Backdrop";
 

export default function Index(): JSX.Element {
  const { state, sideDrawer , toggleNavHandler }=useContext(Store);

  // const [sideDrawer , setSideDrawer]= useState();

 // *********** NAVBAR ***********
  // const toggleNavHandler = () => setSideDrawer(!sideDrawer );

  // CONTROL BACKFROP DISPLAY COMPONENT
  let backdrop;

  if( sideDrawer){
    backdrop =  <Backdrop click={toggleNavHandler}/>;
  }

    return (
       <>
       <Header
        toggleNavHandler ={toggleNavHandler }
        sideDrawer={sideDrawer}/>

        <SubHeader
        favourites={state.favourites}
        />

        <Drawer 
        favourites={state.favourites}
        sideDrawer={sideDrawer}
        toggleNavHandler ={toggleNavHandler }/>
           {backdrop}
      </>
    )
}
 