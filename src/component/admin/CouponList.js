import React,{useEffect,useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import VendorSidebar from '../../sidebar/VendorSidebar';
import {GetCouponAction,DeleteCouponAction} from "../../action"
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";


export default function ProductList() {
  const auth = useSelector(state=>state.auth);
  const couponData = useSelector(state=>state?.category?.coupon)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    dispatch(GetCouponAction())
  },[])

  const deleteCoupon=async(id)=>{
    const data={id:id}
    dispatch(DeleteCouponAction(data))
    await dispatch(GetCouponAction()) 
    alert("Coupon Delete Successfully...")

  }

	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  {auth?.user?.role==="Vendor"?<VendorSidebar/>:<Sidebarr/>}
         
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        All Coupons List
        <small>it all starts here</small>
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
        <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            <Link
              to="/addcoupon"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Coupon "}
            </Link>
            {" "}
            {/*<Link to="/upload"
              type="button"
              className="btn btn-primary"
              data-toggle="tooltip"
              title="Upload"
            >
              <i className="fa fa-upload" />{" "}
              {"Bulk Upload"}
            </Link>*/}
          </div>
        </div>
        <div className="box-body">
        	<table className="table table-bordered table-striped dataTable" id="example2">
        	  <thead>
        	    <tr>
        	  	<th className="fw-bold">{" "}<input type="checkbox"/></th>
              
        	  	<th>Coupon Code</th>
              <th>Coupon Type</th> 
              <th>Expiry</th> 
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {couponData?.length>0  &&couponData?.map((dt)=>(
              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    <p>{dt?.couponCode}</p>
                  </span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt?.couponType}</span>
                </td>  
                <td>
                  <span className="text-lowercase fs-1">{dt?.couponExpire}</span>
                </td>  
                <td>
                  <button className="btn btn-default" onClick={(e)=>deleteCoupon(dt?._id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  <Link to={"/editcoupon/"+auth?.user?.role+"/ "+auth?.user?._id+"/"+dt?._id} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link>
                </td>
              </tr>
              ))}
        	  </tbody>
        	</table>
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