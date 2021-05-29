import AuthLayout from './auth-layout';
import DashboardLayout from './dashboard-layout'
import {
    Route,
    Switch,
    Redirect
  } from "react-router-dom";

const NotFound = () => <h1>Not Found</h1>;

function Layouts() {
  return (
    <Switch>
      <Route path="/auth" component={AuthLayout} />
      <Route path="/dashboard" component={DashboardLayout} />
      <Redirect from="/" to="/auth" exact />
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}

export default Layouts;

