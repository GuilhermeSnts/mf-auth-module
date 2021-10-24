import React from 'react'
import { Route } from 'react-router-dom'

import SignInPage from "./signin/components/SignInPage";
import PasswordRecoveryPage from "./passwordRecovery/components/PasswordRecoveryPage";

const AuthRoutes = [
  <Route path="/signin" key="/signin" component={SignInPage} />,
  <Route exact path="/password-recovery" key="/password-recovery" component={PasswordRecoveryPage} />,
]

export default AuthRoutes
