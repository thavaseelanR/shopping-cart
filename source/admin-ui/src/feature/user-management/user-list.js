import React from 'react';
import AdminDashbordHeader from '../admin-dashbord-header/admin-dashbord-header';
import AdminDashbordSitebar from '../admin-dashbord-sidebar/admin-dashbord-sitebar';

import UserManagementTable from './user-management-table';
import UsermanagementPagination from './usermanagement-pagination';
import UsermanagementAddNewUser from './usermanagement-add-new-user';
import UsermanagementEdit from './usermanagement-edit';
import UsermanagementDelete from './usermanagement-delete';

function UserList() {
    return (
        <div>
            <div className="preloader">
                <div className="lds-ripple">
                    <div className="lds-pos"></div>
                    <div className="lds-pos"></div>
                </div>
            </div>


            <div id="main-wrapper" data-navbarbg="skin6" data-theme="light" data-layout="vertical" data-sidebartype="full" data-boxed-layout="full">
                <AdminDashbordHeader />
                <AdminDashbordSitebar />
                <div className="container-xl" style={{ marginRight: "50px" }}>
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h2> <b> Manage Users List</b></h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                                    </div>
                                </div>
                            </div>
                            <UserManagementTable />
                            <UsermanagementPagination />
                        </div>
                    </div>
                </div>

                <UsermanagementAddNewUser />

                <UsermanagementEdit />
                <UsermanagementDelete />

            </div>
        </div>
    )
}

export default UserList;
