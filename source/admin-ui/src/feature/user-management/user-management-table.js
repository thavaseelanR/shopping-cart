import React from 'react'

function UserManagementTable() {
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            <span className="custom-checkbox">
                                <input type="checkbox" id="selectAll" />
                                <label htmlFor="selectAll"></label>
                            </span>
                        </th>
                        <th style={{color:"#03A9F4"}}><b>#</b></th>
                        <th style={{color:"#03A9F4"}}><b>User Id</b></th>
                        <th style={{color:"#03A9F4"}}><b>Name</b></th>
                        <th style={{color:"#03A9F4"}}><b>Email</b></th>
                        <th style={{color:"#03A9F4"}}><b>Gender</b></th>
                        <th style={{color:"#03A9F4"}}><b>Phone</b></th>
                        <th style={{color:"#03A9F4"}}><b>Address</b></th>
                        <th style={{color:"#03A9F4"}}><b>Actions</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className="custom-checkbox">
                                <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                <label htmlFor="checkbox1"></label>
                            </span>
                        </td>
                        <td>1</td>
                        <td>UId123</td>
                        <td>thavasee</td>
                        <td>1@gmail.com</td>
                        <td>Male</td>
                        <td>2345678123</td>
                        <td>21, east street peikkarambnkottai</td>
                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default UserManagementTable
