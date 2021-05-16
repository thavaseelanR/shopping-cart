import React from 'react'
import AdminDashbordHeader from '../admin-dashbord-header/admin-dashbord-header';
import AdminDashbordSitebar from '../admin-dashbord-sidebar/admin-dashbord-sitebar';


import AdminOrderProductTable from './admin-order-product-table';
import AdminOrderProductPagination from './admin-order-product-pagination';
import AdminOrderProductEdit from './admin-order-product-edit';
import AdminOrderProductDelete from './admin-order-product-delete';

function AdminOrderProductList() {
    return (
        <div>
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
                                    <div className="table-title" style={{ width: "1110px" }}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h2><b>All Product List</b></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <AdminOrderProductTable />
                                    <AdminOrderProductPagination />

                                </div>
                            </div>
                        </div>
                        <AdminOrderProductEdit />
                        <AdminOrderProductDelete />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminOrderProductList
