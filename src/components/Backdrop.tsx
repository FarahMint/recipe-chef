import React from 'react';

export default function Backdrop(props:any): JSX.Element {
   return( <div 
    className="backDrop"
     onClick={props.click } 
    >  
    </div>
  );
}
 