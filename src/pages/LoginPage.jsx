import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import  firebase, { uiConfig } from "../config/firebaseConfig";

function LoginPage() {
  return (
    <>
      <div>
        <p className="brand">Notes</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </>
  );
}

export default LoginPage;
