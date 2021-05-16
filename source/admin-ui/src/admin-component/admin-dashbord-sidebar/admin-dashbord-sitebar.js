import React from 'react';
import orderListIcon from '../admin-asserts/icons/note.png';
import UserIcon from '../admin-asserts/icons/user.png';
import ProductList from '../admin-asserts/icons/checklist.png';
import CreateProduct from '../admin-asserts/icons/product-design.png';


function AdminDashbordSitebar() {
    return (
        <div>
            <aside className="left-sidebar" data-sidebarbg="skin5">

                <div className="scroll-sidebar">

                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/admin-dashbord" aria-expanded="false" style={{marginBlock: "25px"}}>
                                    <i className="mdi mdi-av-timer"></i>
                                    <span className="hide-menu">Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/admin-user-list" aria-expanded="false">
                                    <i className="mdi mdi-account-network"></i>
                                    <span className="hide-menu">Admin Users</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/user-list" aria-expanded="false">
                                    <img src={UserIcon} style={{ with: "20px", height: "24px", marginLeft: "7px", marginRight: "5px" }} />
                                    <span className="hide-menu">Users</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/admin-table" aria-expanded="false">
                                    <img src={ProductList} style={{ with: "20px", height: "24px", marginLeft: "7px", marginRight: "5px" }} />
                                    <span className="hide-menu">Product List</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/admin-upload-product" aria-expanded="false">
                                <img src={CreateProduct} style={{ with: "20px", height: "24px", marginLeft: "7px", marginRight: "5px" }} />
                                    <span className="hide-menu">Create Product</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/admin-order-product-list" aria-expanded="false">
                                    <img src={orderListIcon} style={{ with: "20px", height: "24px", marginLeft: "7px" }} />
                                    <span className="hide-menu">Order Product List</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/admin-pagenot-fount" aria-expanded="false">
                                    <i className="mdi mdi-alert-outline"></i>
                                    <span className="hide-menu">404</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </aside>
        </div>
    )
}

export default AdminDashbordSitebar;
