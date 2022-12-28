import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {VendorAction,updateVendorStatus,vendorDelete} from "../../action";
import {useDispatch,useSelector} from "react-redux";

export default function ProductList() {
  const vendor = useSelector(state=>state?.vendor);

  const dispatch = useDispatch();
  const vendorGetData=()=>{
    dispatch(VendorAction());
  }
  useEffect(()=>{
    vendorGetData();  
  },[])

  const blockStatus=(id)=>{
    const status="block";
    const data={id,status}
    dispatch(updateVendorStatus(data));
   vendorGetData(); 

    
  }
  const unBlockStatus=(id)=>{
    const status="active";
    const data={id,status}
    dispatch(updateVendorStatus(data));
    vendorGetData(); 
  }

  const deleteVendorBtn=(id)=>{ 
    const data={id}
    dispatch(vendorDelete(data));
  }

  console.log(vendor?.vendor)
  const check=()=>{
    vendorGetData()
  }

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
        Manage All Vendors 
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
      <div className="box">
         
        <div className="box-body">
        <button onClick={(e)=>check()}></button>
        	<table className="table table-bordered table-striped dataTable" id="example1">
        	  <thead>
        	    <tr>
        	  	<th className="fw-bold">{" "}<input type="checkbox"/></th>
        	  	<th>Vendor Name</th>
        	  	<th>Vendor Email</th>
        	  	<th>Vendor Phone</th>
        	  	<th>Status</th>
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {vendor?.vendor?.map(vd=>(
        	  	<tr>
        	  		<td><input type="checkbox"/></td>
        	  		<td>
        	  			<span className="text-uppercase fs-1">{vd.fname}</span>
        	  		</td>
        	  		<td>
        	  			
                  <span className="text-uppercase fs-1">{vd.email}</span>
        	  		</td>
        	  		<td>
                  <span className="text-uppercase fs-1">{vd.phoneNumber}</span></td>
        	  		<td>
                  <span className="text-uppercase fs-1">{vd.status}</span></td>
        	  		<td>
        	  			<button className="btn btn-default" onClick={(e)=>deleteVendorBtn(vd._id)}>
        	  				<i className="fa fa-trash"></i>
        	  			</button>
        	  			{" "}
        	  			<Link to={`/editVendor/${vd._id}`} className="btn btn-default">
        	  				<i className="fa fa-edit"></i>
        	  			</Link>
                  {" "}
                  {vd.status==="block"?
                  <button className="btn btn-default" onClick={(e)=>unBlockStatus(vd._id)}>
                    Unblock
                  </button>:
                  <button className="btn btn-default" onClick={(e)=>blockStatus(vd._id)}>
                    Block
                  </button>}
        	  		</td>
        	  	</tr>
              ))
            }
        	  </tbody>
        	</table>
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