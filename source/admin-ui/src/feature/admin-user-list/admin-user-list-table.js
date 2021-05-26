import React from 'react'
import axios from 'axios';
import { includes } from 'lodash';

function AdminUserListTable() {
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
                        <th style={{ color: "#03A9F4" }}><b>#</b></th>
                        <th style={{ color: "#03A9F4" }}><b>Name</b></th>
                        <th style={{ color: "#03A9F4" }}><b>Last Name</b></th>
                        <th style={{ color: "#03A9F4" }}><b>Email</b></th>
                        <th style={{ color: "#03A9F4" }}><b>Role Name</b></th>
                        <th style={{ color: "#03A9F4" }}><b>Date</b></th>
                        <th style={{ color: "#03A9F4" }}><b>Active</b></th>
                        <th style={{ color: "#03A9F4" }}><b>Actions</b></th>
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
                        <th>1</th>
                        <td>thavasee</td>
                        <td>rajendiran</td>
                        <td>thavasee@mail.com</td>
                        <td>super admin</td>
                        <td>2-2-2020</td>
                        <td>active</td>
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

export default AdminUserListTable;
