import React from 'react';
import './App.css';
import Array from './components/Array';
import TraversalSLL from './components/SingleLinkedList/Traversal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import url from './utils/url'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={url.main} component={Array} />
                <Route exact path={url.sLLTraversing} component={TraversalSLL} />
            </Switch>

        </Router>
    )
}

export default App;
