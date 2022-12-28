import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/VendorSidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {vendorDetails} from "../../action";
 

export default function Profile() {
  const auth = useSelector(state=>state.auth);  
  const respData = useSelector(state=>state);  
  const [profileInfo,setProfileInfo] = useState([]);
  const dispatch = useDispatch(); 

  useEffect(()=>{ 
    vendorDetailsData();
    setProfileInfo(respData.vendor.vendor);
  },[]) 

 const vendorDetailsData=async()=>{
   dispatch(vendorDetails('62c2be8de007e241b4629d33'));
 }

 console.log("profileInfo ==== ",profileInfo)

	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/>
          
  
 <div className="content-wrapper"> 
        <section className="content-header">
          <h1> 
             Profile
          </h1>
          <ol className="breadcrumb">
            <li><Link to="/"><i className="fa fa-dashboard" /> Home</Link></li> 
            <li className="active">Profile</li>
          </ol>
        </section> 
        <section className="content">
          <div className="row">
            <div className="col-md-3"> 
              <div className="box box-primary">
                <div className="box-body box-profile">
                  <img className="profile-user-img img-responsive img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" />
                  <h3 className="profile-username text-center">{auth.user.fname} {auth.user.lname}</h3>
                  <p className="text-muted text-center">{profileInfo.businessName}</p>
                  <ul className="list-group list-group-unbordered">
                    <li className="list-group-item">
                      <b>Business Name</b> <a className="pull-right"><b>{profileInfo.businessName}</b></a>
                    </li>
                    <li className="list-group-item">
                      <b>Business Number</b> <a className="pull-right"><b>{profileInfo.businessNumber}</b></a>
                    </li>
                    <li className="list-group-item">
                      <b>Business Type</b> <a className="pull-right"><b>{profileInfo.businessType}</b></a>
                    </li>
                    <li className="list-group-item">
                      <b>Email</b> <a className="pull-right"><b>{profileInfo.email}</b></a>
                    </li>
                    <li className="list-group-item">
                      <b>Phone Number</b> <a className="pull-right"><b>{profileInfo.phoneNumber}</b></a>
                    </li>
                    <li className="list-group-item">
                      <b>Address</b> <a className="pull-right"><b>{profileInfo.address}</b></a>
                    </li>
                    <li className="list-group-item">
                      <b>City</b> <a className="pull-right"><b>{profileInfo.city}</b></a>
                    </li>
                  </ul>
                  {/* <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a> */}
                </div> 
              </div> 
              {/* <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">About Me</h3>
                </div> 
                <div className="box-body">
                  <strong><i className="fa fa-book margin-r-5" /> Education</strong>
                  <p className="text-muted">
                    B.S. in Computer Science from the University of Tennessee at Knoxville
                  </p>
                  <hr />
                  <strong><i className="fa fa-map-marker margin-r-5" /> Location</strong>
                  <p className="text-muted">Malibu, California</p>
                  <hr />
                  <strong><i className="fa fa-pencil margin-r-5" /> Skills</strong>
                  <p>
                    <span className="label label-danger">UI Design</span>
                    <span className="label label-success">Coding</span>
                    <span className="label label-info">Javascript</span>
                    <span className="label label-warning">PHP</span>
                    <span className="label label-primary">Node.js</span>
                  </p>
                  <hr />
                  <strong><i className="fa fa-file-text-o margin-r-5" /> Notes</strong>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                </div> 
              </div>  */}
            </div> 
            <div className="col-md-9">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs"> 
                  <li className="active"><a href="#settings" data-toggle="tab">Update Profile</a></li>
                </ul>
                <div className="tab-content">
                  <div className="active tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                          <input type="text" value={profileInfo.fname} className="form-control" id="inputName" placeholder="Name" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                          <input type="text" value={profileInfo.lname} className="form-control" id="inputName" placeholder="Last Name" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Business Name</label>
                        <div className="col-sm-10">
                          <input type="text" value={profileInfo.businessName} className="form-control" id="inputName" placeholder="Business Name" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Business Number</label>
                        <div className="col-sm-10">
                          <input type="text" value={profileInfo.businessNumber} className="form-control" id="inputName" placeholder="Business Number" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Business Type</label>
                        <div className="col-sm-10">
                          <input type="text" value={profileInfo.businessType} className="form-control" id="inputName" placeholder="Business Type" />
                        </div>
                      </div>


                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                          <input readOnly="true" type="email" value={profileInfo.email} className="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Phone Number</label>
                        <div className="col-sm-10">
                          <input type="text" value={profileInfo.phoneNumber} className="form-control" id="inputEmail" placeholder="Phone Number" />
                        </div>
                      </div>


                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Address</label>
                        <div className="col-sm-10">
                          <input type="text" value={profileInfo.address} className="form-control" id="inputEmail" placeholder="Address" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                          <input type="text" value={profileInfo.city} className="form-control" id="inputEmail" placeholder="City" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                          <input type="password" className="form-control" id="inputEmail" placeholder="Password" />
                        </div>
                      </div>

 
                     
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </section> 
      </div>  
<Footer/>
<Tool/> 
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}  