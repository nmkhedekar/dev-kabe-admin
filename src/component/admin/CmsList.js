import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import VendorSidebar from '../../sidebar/VendorSidebar';
import {GetCmsAction,DeleteCmsAction} from "../../action"
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";

import DOMPurify from 'dompurify'


export default function ProductList() {
  const auth = useSelector(state=>state.auth);
  const cmsData = useSelector(state=>state?.category?.cms)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(GetCmsAction())
  },[])

  const deleteCms=async(id)=>{
    const data={id:id}
    await dispatch(DeleteCmsAction(data))
    await dispatch(GetCmsAction())
    alert("CMS deleted Successfully...")

  }

  const MAX_LENGTH = 200;

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
        All CMS Pages
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
              to="/cms"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New CMS Page "}
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
              
        	  	<th>Page Title</th>
              <th>Page Content</th> 
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {cmsData?.length>0  &&cmsData?.map((dt)=>(
              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    <p>{dt?.pageTitle}</p>
                  </span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">
                    {/* {dt?.pageContent} */}
                    <div
                      dangerouslySetInnerHTML={{__html: dt.pageContent.substring(0, MAX_LENGTH)}} 
                      /> ....
                  </span>
                </td>  
                <td>
                  <button className="btn btn-default" onClick={(e)=>deleteCms(dt?._id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  <Link to={"/cmsedit/"+auth?.user?.role+"/"+auth?.user?._id+"/"+dt?._id} className="btn btn-default">
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