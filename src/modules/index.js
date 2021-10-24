import React from 'react'
// pages
import SignInPageComponent from "./signin/components/SignInPage";
import PasswordRecoveryComponent from "./passwordRecovery/components/PasswordRecoveryPage";
import Routes from './routes';

export const SignInPage = (props) => <SignInPageComponent {...props} />;
export const PasswordRecovery= (props) => <PasswordRecoveryComponent {...props} />;

// route
export const AuthRoutes = Routes
