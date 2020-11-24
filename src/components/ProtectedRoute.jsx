import React, { useContext } from "react";
import { AuthContext } from "../contextStore/AuthContext";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: OurComponent, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => (
        isLoggedIn ? (
          <OurComponent {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      )}></Route>
  );
};

export default ProtectedRoute;
