import PrivateRoute from './private-route'
import AdminUsers from '../feature/admin-user-list/admin-user-list'
import {
  Route,
  Redirect
} from "react-router-dom";
import AdminDashbordHeader from '../feature/admin-dashbord-header/admin-dashbord-header';
import AdminDashbordSitebar from '../feature/admin-dashbord-sidebar/admin-dashbord-sitebar';

function DashabordLayout() {
  return (
    <div id="main-wrapper" data-navbarbg="skin6" data-theme="light" data-layout="vertical" data-sidebartype="full" data-boxed-layout="full">
    
      <div className="main-left"></div>
      <div className="container-xl" id="main-container">
        <PrivateRoute path="/dashboard/users" exact component={AdminUsers} />
        <Redirect from="/dashboard" to="/dashboard/users" exact />
      </div>
      <AdminDashbordHeader />
      <AdminDashbordSitebar />
      
    </div>
  );
}

export default DashabordLayout
