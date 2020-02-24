import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './views/Landing';
import Terms from './views/Terms';
import NotFound from './views/NotFound';

ReactDOM.render(
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/terms" component={Terms} />
              <Route component={NotFound} />
            </Switch>
          </Router>, document.getElementById('root'));