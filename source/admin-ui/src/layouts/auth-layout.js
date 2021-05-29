import Login from '../feature/admin-login/admin-login'
import {
    Route,
    Redirect
  } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <Route path="/auth/login" exact component={Login} />
      <Redirect from="/auth" to="/auth/login" exact />
    </>
  );
}

export default AuthLayout;
