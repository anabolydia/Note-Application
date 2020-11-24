import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./contextStore/AuthContext";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <div className="app-container">
        <AuthContextProvider>
        <Router>
          <Navigation/>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <ProtectedRoute path="/" exact component={HomePage} />
          </Switch>
        </Router>
        </AuthContextProvider>
      </div>
    </>
  );
};

export default App;
