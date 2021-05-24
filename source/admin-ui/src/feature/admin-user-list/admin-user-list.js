
import React, { useEffect } from 'react'
import './admin-user-list.scss';
import { useDispatch, useSelector } from 'react-redux'
import AdminUserListTable from './admin-user-list-table';
import AdminUserListTablePagination from './admin-user-list-table-pagination';
import AdminAddNewUser from './admin-add-new-user';
import AdminEditUser from './admin-edit-user';
import AdminDeleteUser from './admin-delete-user';

import AdminDashbordHeader from '../admin-dashbord-header/admin-dashbord-header';
import AdminDashbordSitebar from '../admin-dashbord-sidebar/admin-dashbord-sitebar';
import { setAddUserFormClosed } from './slice/admin-user-list-common-slice'

function AdminUserList() {

    const dispatch = useDispatch();
    const { isAddUserFormClosed } = useSelector((state) => state?.adminUserListCommonReducer?.addNewUserPage) || {}

    useEffect(() => {
        console.log(isAddUserFormClosed);
        if (isAddUserFormClosed) {
            // refresh the grid data
            alert(true)
        }else{
            alert(false)
        }
    }, [isAddUserFormClosed])

    const addNewUser = () => {
        debugger
        dispatch(setAddUserFormClosed(false))
    }

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
                                        <h2><b>Admin User</b></h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#addEmployeeModal" onClick={addNewUser} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                                    </div>
                                </div>
                            </div>
                            <AdminUserListTable />
                            <AdminUserListTablePagination />
                        </div>
                    </div>
                </div>
                <AdminAddNewUser />
                <AdminEditUser />
                <AdminDeleteUser />
            </div>
        </div>
    )
}

export default AdminUserList;
