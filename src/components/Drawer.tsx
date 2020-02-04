import React from 'react';
import Nav from "./Nav";


 
    export default function Drawer(props:any): JSX.Element {

    return(
        <Nav 
        sideDrawer={props.sideDrawer}
        favourites={props.favourites}
        toggleNavHandler ={props.toggleNavHandler }
        />
    )   
}