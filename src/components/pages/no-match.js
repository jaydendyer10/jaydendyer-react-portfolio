import React from 'react';
import { Link } from "react-router-dom"

const NoMatch = () => {
    return ( 
    <div>
        <h2>We couldnt find that page</h2> 
        <Link to="/">Return to homepage</Link>

    </div>
    );
}
 
export default NoMatch;