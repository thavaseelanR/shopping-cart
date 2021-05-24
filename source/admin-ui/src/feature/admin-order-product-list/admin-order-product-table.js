import React from 'react';
import { Button } from '@material-ui/core';

function AdminOrderProductTable() {
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            <span className="custom-checkbox">
                                <input type="checkbox" id="selectAll" />
                                <label for="selectAll"></label>
                            </span>
                        </th>
                        <th style={{color:"#03A9F4"}}><b>#</b></th>   
                        <th style={{color:"#03A9F4"}}><b>Order Id</b></th>
                        <th style={{color:"#03A9F4"}}><b>User Id</b></th>
                        <th style={{color:"#03A9F4"}}><b>User Name</b></th>
                        <th style={{color:"#03A9F4"}}><b>User Email</b></th>
                        <th style={{color:"#03A9F4"}}><b>User Phone</b></th>
                        <th style={{color:"#03A9F4"}}><b>User Address</b></th>
                        <th style={{color:"#03A9F4"}}><b>Product Detail</b></th>
                        <th style={{color:"#03A9F4"}}><b>Product Total Price</b></th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className="custom-checkbox">
                                <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                <label for="checkbox1"></label>
                            </span>
                        </td>
                        <td>1</td>
                        <td>OR123</td>
                        <td>Us123</td>
                        <td>thavaseelan</td>
                        <td>1@gmail.com</td>
                        <td>6381098765</td>
                        <td>21 east street peikkarambankottai</td>
                        <td>
                            <a href="/admin-product-detail">                              <Button variant="contained" color="primary">Detail</Button></a>
                        </td>
                        <td>5000</td>
                        {/* <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td> */}
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default AdminOrderProductTable;
