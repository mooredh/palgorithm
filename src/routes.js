/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from './screens/Home';
import ArraysPage from './screens/ArraysPage';
import ListsPage from './screens/ListsPage';
import StacksPage from './screens/StacksPage';
import QueuesPage from './screens/QueuesPage';
import TreesPage from './screens/TreesPage';
import HeapsPage from './screens/HeapsPage';
import MapsPage from './screens/MapsPage';
import NotFoundPage from './screens/NotFoundPage';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/arrays" component={ArraysPage} />
            <Route path="/lists" component={ListsPage} />
            <Route path="/stacks" component={StacksPage} />
            <Route path="/queues" component={QueuesPage} />
            <Route path="/trees" component={TreesPage} />
            <Route path="/heaps" component={HeapsPage} />
            <Route path="/maps" component={MapsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);