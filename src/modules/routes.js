import React, { lazy } from "react";
import { Route } from "react-router-dom";

const SignInPage = lazy(() => import("./signin/components/SignInPage"));
const PasswordRecoveryPage = lazy(() =>
  import("./passwordRecovery/components/PasswordRecoveryPage")
);

const AuthRoutes = [
  <Route path="/signin" key="/signin" component={SignInPage} />,
  <Route
    exact
    path="/password-recovery"
    key="/password-recovery"
    component={PasswordRecoveryPage}
  />,
];

export default AuthRoutes;
