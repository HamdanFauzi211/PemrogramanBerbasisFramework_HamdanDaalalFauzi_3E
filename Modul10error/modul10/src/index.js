import React from 'react';
import ReactDOM from 'react-dom/client';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes.js";
import Header from "./Header";
import './styles.css';
import { useState } from 'react/cjs/react.production.min';
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);
export const AuthContext = React.createContext(null);

function App() {
  const [isLogedIn, setLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ isLogedIn, setLoggedIn}}>
      Is logged in? {JSON.stringify(isLogedIn)}
      <div classname="App">
        <Router>
          <Header>

            <Switch>
              {routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
              </Switch>
          </Header>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);