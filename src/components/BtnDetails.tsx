import React from 'react';

import { Link } from "react-router-dom";

/**ICON */
import {FaUtensils} from "react-icons/fa";

export default function BtnDetails(props:any) {
    return (
        <div>
            
            <Link to={`/${props.category}/${props.item.idMeal}`} className="btn-primary recipes-link">
                          <FaUtensils/>
                            details
            </Link>
        </div>
    )
}
