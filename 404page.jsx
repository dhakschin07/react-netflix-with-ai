import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css"; // Import CSS file for additional styles

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <div className="content">
                
                
                <Link to="/styled/Home">
                    <button style={{fontFamily:'revert-layer',fontSize:'100%'}}>Netflix Home</button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
