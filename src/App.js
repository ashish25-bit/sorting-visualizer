import React from 'react';
import './App.css';
import Array from './components/Array';
import SingleLinkedList from './components/SingleLinkedList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Array} />
                <Route exact path='/linked-list' component={SingleLinkedList} />
            </Switch>

        </Router>
    )
}

export default App;
