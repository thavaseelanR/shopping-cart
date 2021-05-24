import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './utils';
import Register from './component/registration/registration';
import AmazonLogin from './component/login/login';
// import AmazonHome from './component/shoping-home/home';

import AdminLogin from './feature/admin-login/admin-login';
import AdminRegister from './feature/admin-register/admin-register';
import AdminDashbord from './feature/admin-dashbord/admin-dashbord';
import UserList from './feature/user-management/user-list';
import AdminProfilePage from './feature/admin-profile/admin-profile';
import AdminTable from './feature/admin-all-product-list/admin-all-product-list';
import AdminPageNotFount from './feature/admin-error-page/admin-page-not-fount';
import AdminUploadProduct from './feature/admin-upload-product/admin-upload-product';
import AdminUserList from './feature/admin-user-list/admin-user-list';
import AdminOrderProductList from './feature/admin-order-product-list/admin-order-product-list';
import AdminProductDetail from './feature/admin-product-detail/admin-product-detail';

const initialState = {};
const store = configureStore(initialState)

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/amazon-register" component={Register} />
            <Route exact path="/amazon-login" component={AmazonLogin} />

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
      </div>
    </Provider>
  );
}

export default App;
