import React, { useContext, useEffect } from 'react';
import './App.css';
import { Route, Router, useHistory } from 'react-router-dom';
import App from './App';
import Login from './Login';


function Routes() {
  const history = useHistory()
  const user = { email: 'test@gmail.com' }
  // const user = false

  return (
    <div className="App">
      <Router history={history}>
        {user ? (
          <>
            <div className="body">
              <Route exact path={'/'} component={App} />
            </div>
          </>
        ) : (
            <Route exact path={'/'} component={Login} />
          )}
      </Router>
    </div>
  );
}

export default Routes;
