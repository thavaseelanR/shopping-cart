import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './component/registration/registration';
import AmazonLogin from './component/login/login';
// import AmazonHome from './component/shoping-home/home';

import AdminLogin from './admin-component/admin-login/admin-login';
import AdminRegister from './admin-component/admin-register/admin-register';
import AdminDashbord from './admin-component/admin-dashbord/admin-dashbord';
import UserList from './admin-component/user-management/user-list';
import AdminProfilePage from './admin-component/admin-profile/admin-profile';
import AdminTable from './admin-component/admin-all-product-list/admin-all-product-list';
import AdminPageNotFount from './admin-component/admin-error-page/admin-page-not-fount';
import AdminUploadProduct from './admin-component/admin-upload-product/admin-upload-product';
import AdminUserList from './admin-component/admin-user-list/admin-user-list';
import AdminOrderProductList from './admin-component/admin-order-product-list/admin-order-product-list';
import AdminProductDetail from './admin-component/admin-product-detail/admin-product-detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/amazon-register" component={Register} />
          <Route exact path="/amazon-login" component={AmazonLogin} />
          {/* <Route exact path="/amazon-home" component={AmazonHome} /> */}

          {/* admin routers */}
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path="/admin-register" component={AdminRegister} />
          <Route exact path="/admin-dashbord" component={AdminDashbord} />
          <Route exact path="/user-list" component={UserList} />
          <Route exact path="/admin-profile" component={AdminProfilePage} />
          <Route exact path="/admin-table" component={AdminTable} />
          <Route exact path="/admin-upload-product" component={AdminUploadProduct} />
          <Route exact path="/admin-pagenot-fount" component={AdminPageNotFount} />
          <Route exact path="/admin-user-list" component={AdminUserList} />
          <Route exact path="/admin-order-product-list" component={AdminOrderProductList} />
          <Route exact path="/admin-product-detail" component={AdminProductDetail} />
        </Switch>
      </Router>

    </div >
  );
}

export default App;
