import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import firebaseContext from './firebaseContext'

export default function Login() {
  const history = useHistory()
  const firebase = useContext(firebaseContext)
  return (
    <div className="Login">
      <button
        className="btn-success"
        onClick={() => {
          const gAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth()
            .signInWithPopup(gAuthProvider)
            .then(() => history.push('/'))
            .catch(function (error) {
              console.error(error.code, error.message)
            })
        }}
      >
        Login with Gmail
      </button>
    </div>
  )
}