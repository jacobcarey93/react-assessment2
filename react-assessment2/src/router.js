import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthView from '../src/components/AuthView/AuthView';
import BrowsingView from '../src/components/BrowsingView/BrowsingView';
import DetailsView from '../src/components/DetailsView/DetailsView';

export default (

    <Router>
        <Switch>
            <div>
                <Route exact path='/' component={AuthView} />
                <Route path='/browsing' component={BrowsingView} />
                <Route path='/details/:id' component={DetailsView} />
                <Route path="/render" render={() => <h1>ROUTE RENDER</h1>} />
            </div>
        </Switch>
    </Router>
)