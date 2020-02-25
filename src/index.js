import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {IntlProvider } from 'react-intl';
import store from './store/configStore';
import Landing from './views/Landing';
import Terms from './views/Terms';
import NotFound from './views/NotFound';

ReactDOM.render(
    <Provider store={store()}>
      <IntlProvider locale="en">
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/terms" component={Terms} />
              <Route component={NotFound} />
            </Switch>
          </Router>
      </IntlProvider>
      </Provider>, document.getElementById('root'));