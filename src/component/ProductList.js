import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import axios from "../helper/axios";
import {useSelector,useDispatch} from "react-redux";

 
export default function ProductList() {
  const [allProduct,setAllProduct] = useState([]);
  const auth = useSelector(state=>state.auth);

  const apiData=async()=>{
    const data ={email:auth?.user?.email,role:auth?.user?.role}
    const res= await axios.post("/getVendorProductById",data);
    console.log(res?.status);
    console.log(res.data)
    if(res.status===200){
      setAllProduct(res?.data);
    }else{
      setAllProduct()
    }
  }

  useEffect(()=>{
    apiData();
  },[])
console.log("-----------allProduct-------------",allProduct)

const deleteProduct=async(descriptionId,stockId)=>{
  const data={descriptionId,stockId}
  const res = await axios.post("/deleteproductlist",data)
  if(res.status===200){
    apiData();
    alert("Product Deleted");
  }
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

    {/* search option */}
    <div className="box box-section">
      <div className="box-body search-section">

      <div className='search-order col-sm-3'>
          <input type="text" placeholder='Enter Vendor Name'/>
          <button>Search</button>
        </div>
        <div className='search-status col-sm-3'>
          <select className='search-select'>
            <option>Published</option>
            <option>Draft</option>
          </select>
          <button>Search</button>
        </div> 
        
        {/* <div className='search-date col-sm-3'>
          <input type="date"/>
          <button>Filter</button>
        </div> */}
        <div className='search-status col-sm-3'>
          <select className='search-select'>
            <option>Stock</option>
            <option>Out Of Stock</option>
          </select>
          <button>Search</button>
        </div>

        {/* <div className='search-sku col-sm-3'>
          <input type="text" placeholder='Enter SKU nuumber'/>
          <button>Search SKU</button>
        </div> */}

        <div className='search-status col-sm-3'>
          <select className='search-select'>
            <option>Select a catagory</option>
            <option>Catagory 1</option>
            <option>Catagory 2</option>
            <option>Catagory 3</option>
            <option>Catagory 4</option>
          </select>
          <button>Search</button>
        </div>
        
        
      </div>
      </div>


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
            <Link to="/upload"
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
              <th>Product Images</th>
        	  	<th>Product Name</th> 
        	  	<th>Item_Code</th>
        	  	<th>Sale_price</th>
        	  	<th>Regular Price</th>
              <th>Stock Quantity</th>
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {auth?.user?.role==="Admin"?allProduct?.map((dt)=>(
        	  	<tr>
        	  		<td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                     <img src={dt?.images[0]} height="50" width="50"/>
                  </span>
                </td>
        	  		<td>
        	  			<span className="text-uppercase fs-1">{dt?.name}</span>
        	  		</td> 
        	  		 <td>
                  {dt?.item_code}
                </td>
                <td>{dt?.sale_price===null?"0":dt?.sale_price} {process.env.REACT_APP_CURRENCY}</td>
                <td>{dt?.regular_price} {process.env.REACT_APP_CURRENCY}</td> 
                <td>{dt?.stocks.stock_quantity}</td> 
                {/* <td>
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
                </td> */}
                <td>
                  <button className="btn btn-default" onClick={(e)=>deleteProduct(dt?.item_code,dt?.stocks?.item_code)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "}
                  <Link to={"/editproduct/"+auth?.user?.role+"/"+auth?.user?._id+"/"+dt?.item_code} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link>
                  {" "}
                  <Link to={"/viewproduct/"+auth?.user?.role+"/"+auth?.user?._id+"/"+dt?.item_code} className="btn btn-default">
                    <i className="fa fa-eye"></i>
                  </Link>
                </td>
        	  	</tr>
              )):allProduct?.map((dt)=>(
              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    
                    <img src={dt?.images[0]} height="50" width="50"/>
                  </span>
                </td>
                <td>
                  <span className="text-uppercase fs-1">{dt?.name}</span>
                </td>
                <td>
                  <span className="text-uppercase fs-1">{dt?.email}</span>
                </td>
                <td>
                  {dt?.item_code}
                </td>
                <td>{dt?.sale_price===null?"0":dt?.sale_price}</td>
                <td>{dt?.regular_price}</td> 
                <td>{dt?.stocks.stock_quantity}</td> 
                <td>
                  <button className="btn btn-default" onClick={(e)=>deleteProduct(dt?.item_code,dt?.stocks?.item_code)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "}
                  <Link to={"/editproduct/"+auth?.user?.role+"/"+auth?.user?._id+"/"+dt?.item_code} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link>
                  {" "}
                  <Link to={"/viewproduct/"+auth?.user?.role+"/"+auth?.user?._id+"/"+dt?.item_code} className="btn btn-default">
                    <i className="fa fa-eye"></i>
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

{/*<img src={dt?.stocks?.LNK+dt?.stocks?.Item_Full_Code+dt?.stocks?.FOTO1} height="50" width="50"/>*/}
