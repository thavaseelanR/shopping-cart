
import React, { useEffect } from 'react'
import './admin-user-list.scss';
import { useDispatch, useSelector } from 'react-redux'
import AdminUserListTable from './admin-user-list-table';
import AdminUserListTablePagination from './admin-user-list-table-pagination';
import AdminAddNewUser from './admin-add-new-user';
import AdminEditUser from './admin-edit-user';
import AdminDeleteUser from './admin-delete-user';


import { setAddUserFormClosed } from './slice/admin-user-list-common-slice'

function AdminUserList() {

    const dispatch = useDispatch();
    const { isAddUserFormClosed } = useSelector((state) => state?.adminUserListCommonReducer?.addNewUserPage) || {}

    useEffect(() => {
        console.log(isAddUserFormClosed);
        if (isAddUserFormClosed) {
            // refresh the grid data
            //  alert(true)
        } else {
            // alert(false)
        }
    }, [isAddUserFormClosed])

    const addNewUser = () => {
        dispatch(setAddUserFormClosed(false))
    }

    return (
        <>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="row add-new-employee-container">
                        <div className="col-sm-6">
                            <h2 style={{ marginTop: "17px" }}><b>Admin User</b></h2>
                        </div>
                        <div className="col-sm-6" >
                            <a href="#addEmployeeModal" onClick={addNewUser} className="btn btn-success add-employee-btn" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                        </div>
                    </div>
                </div>
                <AdminUserListTable />
            </div>

            <AdminAddNewUser />
            <AdminEditUser />
            <AdminDeleteUser />
        </>
    )
}

export default AdminUserList;
