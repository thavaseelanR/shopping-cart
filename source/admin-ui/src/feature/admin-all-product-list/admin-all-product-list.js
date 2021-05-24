import React from 'react'
import AdminDashbordHeader from '../admin-dashbord-header/admin-dashbord-header';
import AdminDashbordSitebar from '../admin-dashbord-sidebar/admin-dashbord-sitebar';


function adminAllProductList() {
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
                <div class="page-wrapper">

                    <div className="container-xl" style={{ marginRight: "50px" }}>
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h2>All Product <b>List</b></h2>
                                        </div>
    
                                    </div>
                                </div>
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
                                            <th style={{color:"#03A9F4"}}><b>Product Name</b></th>
                                            <th style={{color:"#03A9F4"}}><b>Product Id</b></th>
                                            <th style={{color:"#03A9F4"}}><b>Total Qty</b></th>
                                            <th style={{color:"#03A9F4"}}><b>Product Price</b></th>
                                            <th style={{color:"#03A9F4"}}><b>Product Discription</b></th>
                                            <th style={{color:"#03A9F4"}}><b>Product Image</b></th>
                                            <th style={{color:"#03A9F4"}}><b>Type Of Product</b></th>
                                            <th style={{color:"#03A9F4"}}><b>Offer</b></th>
                                            <th style={{color:"#03A9F4"}}><b>Actions</b></th>
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
                                            <td>mobile</td>
                                            <td>sd123</td>
                                            <td>10</td>
                                            <td>1000</td>
                                            <td>good</td>
                                            <td><img src="" alt="img"/></td>
                                            <td>electronic</td>
                                            <td>3%</td>
                                            <td>
                                                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="clearfix">
                                    <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                    <ul className="pagination">
                                        <li className="page-item disabled"><a href="#">Previous</a></li>
                                        <li className="page-item"><a href="#" className="page-link">1</a></li>
                                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                                        <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                        <li className="page-item"><a href="#" className="page-link">4</a></li>
                                        <li className="page-item"><a href="#" className="page-link">5</a></li>
                                        <li className="page-item"><a href="#" className="page-link">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="addEmployeeModal" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <form>
                                    <div className="modal-header">
                                        <h4 className="modal-title">Add Employee</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea className="form-control" required></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                        <input type="submit" className="btn btn-success" value="Add" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div id="editEmployeeModal" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <form>
                                    <div className="modal-header">
                                        <h4 className="modal-title">Edit Employee</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea className="form-control" required></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                        <input type="submit" className="btn btn-info" value="Save" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div id="deleteEmployeeModal" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <form>
                                    <div className="modal-header">
                                        <h4 className="modal-title">Delete Employee</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete these Records?</p>
                                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                        <input type="submit" className="btn btn-danger" value="Delete" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default adminAllProductList;
