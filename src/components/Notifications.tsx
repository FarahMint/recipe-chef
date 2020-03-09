import React from 'react';

import { INotif} from "../interfaces";

export default function Notifications({status, text}:INotif):JSX.Element { 
    return (
    <div className={`modal alert alert-${status}`}> 
        <div className="modal-content">
            {text} 
        </div>
    </div>
    )
}