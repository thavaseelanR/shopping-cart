import React from 'react'
import AdminDashbordHeader from '../admin-dashbord-header/admin-dashbord-header';
import AdminDashbordSitebar from '../admin-dashbord-sidebar/admin-dashbord-sitebar';

function AdminProfile() {
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

                <div className="container" style={{ marginRight:"50px" }}>
                    <h1 className="page-header">Edit Profile</h1>
                    <div className="row">

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="text-center">
                                <img src="http://lorempixel.com/200/200/people/9/" className="avatar img-circle img-thumbnail" alt="avatar" />
                                <h6>Upload a different photo...</h6>
                                <input type="file" className="text-center center-block well well-sm" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
                            <div className="alert alert-info alert-dismissable">
                                <a className="panel-close close" data-dismiss="alert">×</a>
                                <i className="fa fa-coffee"></i>
                    This is an <strong>.alert</strong>. Use this to show important messages to the user.
                        </div>
                            <h3>Personal info</h3>
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">First name:</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" value="Jane" type="text" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Last name:</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" value="Bishop" type="text" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Company:</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" value="" type="text" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Email:</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" value="janesemail@gmail.com" type="text" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Time Zone:</label>
                                    <div className="col-lg-8">
                                        <div className="ui-select">
                                            <select id="user_time_zone" className="form-control">
                                                <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                                <option value="Alaska">(GMT-09:00) Alaska</option>
                                                <option value="Pacific Time (US & Canada)">(GMT-08:00) Pacific Time (US & Canada)</option>
                                                <option value="Arizona">(GMT-07:00) Arizona</option>
                                                <option value="Mountain Time (US & Canada)">(GMT-07:00) Mountain Time (US & Canada)</option>
                                                <option value="Central Time (US & Canada)" selected="selected">(GMT-06:00) Central Time (US & Canada)</option>
                                                <option value="Eastern Time (US & Canada)">(GMT-05:00) Eastern Time (US & Canada)</option>
                                                <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Username:</label>
                                    <div className="col-md-8">
                                        <input className="form-control" value="janeuser" type="text" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Password:</label>
                                    <div className="col-md-8">
                                        <input className="form-control" value="11111122333" type="password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Confirm password:</label>
                                    <div className="col-md-8">
                                        <input className="form-control" value="11111122333" type="password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label"></label>
                                    <div className="col-md-8">
                                        <input className="btn btn-primary" value="Save Changes" type="button" />
                                        <span></span>
                                        <input className="btn btn-default" value="Cancel" type="reset" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile

