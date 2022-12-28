import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {VendorAction,updateVendorStatus,vendorDelete, vendorAdd} from "../../action";
import {useDispatch,useSelector} from "react-redux";
import { useForm } from "react-hook-form";

  
export default function AddVendor() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch =  useDispatch()
  const vendor = useSelector(state=>state?.vendor);
  const auth = useSelector(state=>state); 
  const obj = {}
  const [inputField , setInputField] = useState(obj)

const inputsHandler = (e) =>{
    let name = e.target.name; 
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
    //setInputField( {[e.target.name]: e.target.value} )
}

 
const onSubmit = (data) => {
   dispatch(vendorAdd(data));
}

  

	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/> 
  <div className="content-wrapper"> 
    <section className="content-header">
      <h1>
       Add New Vendor
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="#">Product Manage</a>
        </li>
        <li className="active">All Product</li>
      </ol>
    </section> 
    <section className="content"> 
      <div className="box">
      <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            <Link
              to="/vendor"
              type="button"
              className="btn btn-success" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" View All Vendor "}
            </Link> 
          </div>
        </div>

        <div className="box-body">
        <section className="content">
          <div className="row">  
            <div className="col-md-12">
              <div className="nav-tabs-custom">
                {/* <ul className="nav nav-tabs"> 
                  <li className="active"><a href="#settings" data-toggle="tab">Update Profile</a></li>
                </ul> */}
                <div className="tab-content">
                  <div className="active tab-pane" id="settings">
                    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="First Name" name="fname" onChange={inputsHandler} value={inputField.fname} {...register("fname", { required: true})}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="Last Name" name="lname" onChange={inputsHandler} value={inputField.lname} {...register("lname", { required: true})}/>
                          {errors.lname && <span className='validationError'>Required</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Business Name</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="Business Name" name="businessName" onChange={inputsHandler} value={inputField.businessName} {...register("businessName", { required: true})}/>
                          {errors.businessName && <span className='validationError'>Required</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Business Number</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="Business Number" name="businessNumber" onChange={inputsHandler} value={inputField.businessNumber} {...register("businessNumber", { required: true})}/>
                          {errors.businessNumber && <span className='validationError'>Required</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Business Type</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="Business Type" name="businessType" onChange={inputsHandler} value={inputField.businessType} {...register("businessType", { required: true})}/>
                          {errors.businessType && <span className='validationError'>Required</span>}
                        </div>
                      </div>


                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                          <input  type="email"  className="form-control" id="inputEmail" placeholder="Email" name="email" onChange={inputsHandler} value={inputField.email} {...register("email", { required: true})}/>
                          {errors.email && <span className='validationError'>Required</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Phone Number</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputEmail" placeholder="Phone Number" name="phoneNumber" onChange={inputsHandler} value={inputField.phoneNumber} {...register("phoneNumber", { required: true})}/>
                          {errors.phoneNumber && <span className='validationError'>Required</span>}
                        </div>
                      </div>


                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Address</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputEmail" placeholder="Address" name="address" onChange={inputsHandler} value={inputField.address} {...register("address", { required: true})}/>
                          {errors.address && <span className='validationError'>Required</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputEmail" placeholder="City" name="city" onChange={inputsHandler} value={inputField.city} {...register("city", { required: true})}/>
                          {errors.city && <span className='validationError'>Required</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                          <input type="password" className="form-control" id="inputEmail" placeholder="Password" name="password" onChange={inputsHandler} value={inputField.password} {...register("password", { required: true})}/>
                          {errors.password && <span className='validationError'>Required</span>}
                        </div>
                      </div>

 
                      
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="submit" className="btn btn-danger" >Submit</button>
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