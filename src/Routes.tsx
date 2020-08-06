import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Router, useHistory } from 'react-router-dom';
import firebaseContext from './firebaseContext'
import App from './App';
import Login from './Login';


function Routes() {
  const [user, updateUser] = useState<any>(null)
  const history = useHistory()
  const firebase = useContext(firebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        updateUser(user)
        history.push('/app')
      }
      else history.push('/')
    });
  }, [user, firebase, history])

  return (
    <div className="App">
      <Router history={history}>
        {user ? (
          <>
            <div className="body">
              <Route exact path={'/app'} component={() => <App user={user} updateUser={updateUser} />} />
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
