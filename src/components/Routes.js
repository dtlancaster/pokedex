import React from "react"
import reactDom from "react-dom"
import { BrowserRouter as Router,Route } from "react-router-dom"

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Pokemon">
                <Pokemon />
            </Route>
        </div>
    </Router>,
    node 
)