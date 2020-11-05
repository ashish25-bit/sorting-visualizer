import React from 'react';
import './App.css';
import Home from './routes/Home';
import Sort from './routes/Sort';
import SLLTraversal from './routes/SLLTraversal';
import SLLInsertion from './routes/SLLInsertion';
import PathFinding from './routes/PathFinding'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import url from './utils/url';
import NotFound from './routes/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={url.main} component={Home} />
                <Route exact path={url.sort} component={Sort} />
                <Route exact path={url.sLLTraversing} component={SLLTraversal} />
                <Route exact path={url.sLLInsertion} component={SLLInsertion} />
                <Route exact path={url.pathFinding} component={PathFinding} />
                <Route exact path='*' component={NotFound} />
            </Switch>

        </Router>
    )
}

export default App;
