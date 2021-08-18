import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import url from './utils/url';
import NotFound from './routes/NotFound';

const Home = lazy(() => import('./routes/Home'));
const Sort = lazy(() => import('./routes/Sort'));
const SLLTraversal = lazy(() => import('./routes/SLLTraversal'));
const SLLInsertion = lazy(() => import('./routes/SLLInsertion'));
const PathFinding = lazy(() => import('./routes/PathFinding'))
// const Tree = lazy(() => import('./routes/Tree'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path={url.main} component={Home} />
                    <Route exact path={url.sort} component={Sort} />
                    <Route exact path={url.sLLTraversing} component={SLLTraversal} />
                    <Route exact path={url.sLLInsertion} component={SLLInsertion} />
                    <Route exact path={url.pathFinding} component={PathFinding} />
                    {/* <Route exact path={url.trees} component={Tree} /> */}
                    <Route exact path='*' component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App;
