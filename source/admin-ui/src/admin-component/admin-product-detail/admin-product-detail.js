import React from 'react';
import AdminDashbordHeader from '../admin-dashbord-header/admin-dashbord-header';
import AdminDashbordSitebar from '../admin-dashbord-sidebar/admin-dashbord-sitebar';
import { Button } from '@material-ui/core';

import './admin-product.scss'

import AdminProductDetailTable from './admin-product-detail-table';
import AdminProductDetailPagination from './admin-product-detail-pagination'
function AdminProductDetail() {
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
                                            <div className="col-sm-12">
                                                <div className="head-con">

                                                    <h2><b>All Product List</b></h2>
                                                    <div className="header-align">
                                                        <a href="/admin-order-product-list" style={{ display: "grid" }}>
                                                            <Button variant="contained" color="primary" className="product-detail-back-btn">Back</Button></a>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                    <AdminProductDetailTable />

                                    <AdminProductDetailPagination />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default AdminProductDetail;
