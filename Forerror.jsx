import React from "react";
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
import Home from "./styled/Home";
import PageNotFound from "./styled/404page";
 
function Forerror() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Routes>
        </Router>
    );
}
 
export default Forerror;