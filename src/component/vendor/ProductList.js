import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/VendorSidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import axios from "axios";


export default function ProductList() {
  const [allProduct,setAllProduct] = useState([]);

  const apiData=async()=>{
    const data ={email:"vendorr@gmail.com"}
    const res= await axios.post("/vendorProductList",data);
    console.log(res.status);
    if(res){
      setAllProduct(res.data);
    }
  }

  useEffect(()=>{
    apiData();
  },[])


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
        All Product List
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
              to="/addproduct"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Product "}
            </Link>
            {" "}
            <Link to="/vendorbulk"
              type="button"
              className="btn btn-primary"
              data-toggle="tooltip"
              title="Upload"
            >
              <i className="fa fa-upload" />{" "}
              {"Bulk Upload"}
            </Link>
          </div>
        </div>
        <div className="box-body">
        	<table className="table table-bordered table-striped dataTable" id="example2">
        	  <thead>
        	    <tr>
        	  	<th className="fw-bold">{" "}<input type="checkbox"/></th>
            	<th>Product Image</th>
        	  	<th>Product Name</th>
              	<th>Vendor</th>
        	  	<th>Item_Code</th>
        	  	<th>Color_Code</th>
        	  	<th>Season</th>
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {allProduct?.map((dt)=>(
        	  	<tr>
        	  		<td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1"></span>
                </td>
        	  		<td>
        	  			<span className="text-uppercase fs-1">{dt.Item_description_EN}</span>
        	  		</td>
                <td>
                  <span className="text-uppercase fs-1">{dt.email}</span>
                </td>
        	  		<td>
        	  			{dt.Item_Code}
        	  		</td>
        	  		<td>{dt.Color_Code}</td>
        	  		<td>{dt.Season}</td> 
        	  		<td>
        	  			<button className="btn btn-default">
        	  				<i className="fa fa-trash"></i>
        	  			</button>
        	  			{" "}
        	  			<button className="btn btn-default">
        	  				<i className="fa fa-edit"></i>
        	  			</button>
                  {" "}
                  <button className="btn btn-default">
                    <i className="fa fa-eye"></i>
                  </button>
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