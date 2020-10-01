import React from 'react';
import './App.css';
import Sort from './routes/Sort';
import SLLTraversal from './routes/SLLTraversal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import url from './utils/url'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={url.main} component={Sort} />
                <Route exact path={url.sLLTraversing} component={SLLTraversal} />
            </Switch>

        </Router>
    )
}

export default App;
