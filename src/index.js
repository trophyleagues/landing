import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store/configStore';
import Landing from './views/Landing';
import Terms from './views/Terms';
import NotFound from './views/NotFound';

const AllTheContentOfTheWorld = () => {
  const lang = useSelector(state => state.front.lang)
    return <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/terms" component={Terms} />
              <Route component={NotFound} />
            </Switch>
          </Router>
}

ReactDOM.render(
    <Provider store={store()}>
      <AllTheContentOfTheWorld />
    </Provider>, document.getElementById('root'));