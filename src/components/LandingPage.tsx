import React from 'react';
// import { Link } from "react-router-dom";

import Menu from "./Menu";

export default function LandingPage(): JSX.Element  {

    return (
        <div className="landpage-container">
            <div className="main-content">

                <div className="imgLink">
                <div className="img">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2ouh9LtEPNEk98AUAA5p1QxRLGrL0bhkov0U8rW_-uQbzaa3oA&s"
                    alt="appetizer"
                    />
                </div>
            </div>

            <Menu/>
        </div>
    </div>
    )
}
