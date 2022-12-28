import React, {useEffect,useState} from 'react'
import {Link,useParams} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {VendorAction,updateVendorStatus,vendorDelete,vendorEdit,updateVendor} from "../../action";
import {useDispatch,useSelector} from "react-redux";

export default function ProductList() {

  const vendor = useSelector(state=>state?.vendor?.editStatus); 
  let { id } = useParams();
   

  const [fname,setFname] = useState(vendor.fname);
  const [lname,setLname] = useState(vendor.lname);
  const [businessName,setBusinessName] = useState(vendor.businessName);
  const [businessNumber,setBusinessNumber] = useState(vendor.businessNumber);
  const [businessType,setBusinessType] = useState(vendor.businessType);
  const [email, setEmail] = useState(vendor.email);
  const [phoneNumber, setPhoneNumber] = useState(vendor.phoneNumber);
  const [address, setAddress] = useState(vendor.address);
  const [city, setCity] = useState(vendor.city);

  const dispatch = useDispatch();
  const vendorData=async()=>{
    dispatch(VendorAction());
  }
  useEffect(()=>{
    vendorData(); 
     dispatch(VendorAction());
     dispatch(vendorEdit(id))
  },[])

  const blockStatus=(id)=>{
    const status="block";
    const data={id,status}
    dispatch(updateVendorStatus(data));
   vendorData(); 

    
  }
  const unBlockStatus=async(id)=>{
    const status="active";
    const data={id,status}
    await dispatch(updateVendorStatus(data));
    await vendorData(); 
  }

  const deleteVendorBtn=(id)=>{ 
    const data={id}
    dispatch(vendorDelete(data));
  }
  const updateVendorBtn=()=>{
    const data ={id,fname,lname,businessName,businessNumber,businessType,email,phoneNumber,address,city}
    dispatch(updateVendor(data));
  }
  console.log(vendor)

	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/>
         
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
       Edit Vendor
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
    {/* Main content */}
    <section className="content">
      {/* Default box */} 
         
        <div className="box-body">
         <div className="box box-default">
   
  <div className="box-body">
    <div className="row">
      <div className="col-md-4">
        <div className="form-group">
          <label>Firstname</label>
          <input type="text" 
          className="form-control"  
          value={fname}
          onChange={(e)=>setFname(e.target.value)}/>
          
        </div> 
      </div>
      <div className="col-md-4">
       
        <div className="form-group">
          <label>Lastname</label>
          
          <input type="text" 
          className="form-control" 
          value={lname} 
          onChange={(e)=>setLname(e.target.value)}/>
        
        </div>
      </div>
      <div className="col-md-4">
       
        <div className="form-group">
          <label>Business Name</label>
          
          <input type="text" className="form-control" value={businessName}
          onChange={(e)=>setBusinessName(e.target.value)}/>
        
        </div>
      </div>
    </div>
    <div className="row">
      
      <div className="col-md-4">
       
        <div className="form-group">
          <label>Business Number</label>
          
          <input type="text" className="form-control" 
          value={businessNumber}
          onChange={(e)=>setBusinessNumber(e.target.value)}/>
        
        </div>
      </div>
      <div className="col-md-4">
       
        <div className="form-group">
          <label>Business Type</label>
          
          <input type="text" className="form-control" value={businessType}
          onChange={(e)=>setBusinessType(e.target.value)}/>
        
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          
        </div> 
      </div>
    </div>
    <div className="row">
      
      <div className="col-md-4">
       
        <div className="form-group">
          <label>Phone Number</label>
          
          <input type="text" className="form-control" value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}/>
        
        </div>
      </div>
      <div className="col-md-4">
       
        <div className="form-group">
          <label>Address</label>
          
          <input type="text" className="form-control" value={address}
          onChange={(e)=>setAddress(e.target.value)}/>
        
        </div>
      </div>

      <div className="col-md-4">
        <div className="form-group">
          <label>City</label>
          <input type="text" className="form-control" value={city}
          onChange={(e)=>setCity(e.target.value)}/>
          
        </div> 
      </div>
    </div> 
    <div className="row"> 
      <div className="col-md-4">
       
        <div className="form-group"> 
          
          <button type="text" className="btn btn-success" onClick={(e)=>updateVendorBtn()}>Update Vendor</button>
        
        </div>
      </div>
    </div>
  </div> 
 
        </div>
        {/* /.box-body */}
        {/*<div className="box-footer">Footer</div>*/}
        {/* /.box-footer*/}
      </div>
      {/* /.box */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  <Footer/>
       <Tool/> 
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}