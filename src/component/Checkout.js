import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import axios from "../helper/axios";
// import axios from "axios";
import "./Checkout.css"
import moment from "moment-js"
 
import {useSelector,useDispatch} from "react-redux";


export default function ProductList() {
  const [allProduct,setAllProduct] = useState([]);
  const auth = useSelector(state=>state.auth);

  const apiData=async()=>{ 
    const res= await axios.post("/getcheckout");
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
console.log(allProduct)

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
        Orders Management
        {/* <small>it all starts here</small> */}
      </h1>
      
    </section>
    {/* Main content */}
    <section className="content">
      {/* Default box */}
      <div className="box box-section">
      <div className="box-body search-section">
        <div className='search-status col-sm-3'>
          <select className='search-select'>
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <button>Search</button>
        </div> 
        
        <div className='search-date col-sm-3'>
          <input type="date"/>
          <button>Filter</button>
        </div>

        <div className='search-sku col-sm-3'>
          <input type="text" placeholder='Enter SKU nuumber'/>
          <button>Search SKU</button>
        </div>
        
        <div className='search-order col-sm-3'>
          <input type="text" placeholder='Enter Seach ID/Name'/>
          <button>Search Orders</button>
        </div>
      </div>
      </div>

      <div className="box">
 
        {/*<div className="box-header with-border"> 
=======
        {/* <div className="box-header with-border"> 
>>>>>>> 4c3ec336442e29b842dd214b28a3df985c3dca6b
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
<<<<<<< HEAD
        </div>*/}
 
        {/*</div> */}
 
        <div className="box-body">
        	<table className="table table-bordered table-striped dataTable" id="example2">
        	  <thead>
        	    <tr>
        	  	<th className="fw-bold">{" "}<input type="checkbox"/></th>
             
              <th>Order Id</th> 
        	  	<th>Date</th>
              <th>Status</th>
        	  	<th>Price</th> 
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {auth?.user?.role==="Admin"?allProduct?.map((dt)=>(

        	  	<tr>
        	  		<td><input type="checkbox"/></td>
               
                <td>#{dt.orderId}<span className="text-primary text-bold"> {dt?.fname} {dt?.lname}</span></td> 
        	  		 <td> 
                  <span className="text-uppercase fs-1">{moment(dt.createdAt).format('YYYY-mm-dd')}</span>
                </td> 
                 <td> 
                 {dt?.status=="On hold"?<button className="text-uppercase fs-1 badge btn Onhold">{dt?.status}</button>:""}
                 {dt?.status=="Rejected"?<button className="text-uppercase fs-1 badge btn Rejected">{dt?.status}</button>:""}
                 {dt?.status=="Open"?<button className="text-uppercase fs-1 badge btn Open">{dt?.status}</button>:""}
                 {dt?.status=="Verified"?<button className="text-uppercase fs-1 badge btn Verified">{dt?.status}</button>:""}
                 {dt?.status=="Delivery ready"?<button className="text-uppercase fs-1 badge btn Deliveryready">{dt?.status}</button>:""}
                 {dt?.status=="Pick up at the store"?<button className="text-uppercase fs-1 badge btn Pickupatthestore">{dt?.status}</button>:""}
                 {dt?.status=="launched"?<button className="text-uppercase fs-1 badge btn launched">{dt?.status}</button>:""}
                 {dt?.status=="conducted"?<button className="text-uppercase fs-1 badge btn conducted">{dt?.status}</button>:""}
                 {dt?.status=="Pending payment"?<button className="text-uppercase fs-1 badge btn Pendingpayment">{dt?.status}</button>:""}
                 {dt?.status=="Cancelled"?<button className="text-uppercase fs-1 badge btn Cancelled">{dt?.status}</button>:""}
                 {dt?.status=="return"?<button className="text-uppercase fs-1 badge btn return">{dt?.status}</button>:""}
                 {dt?.status=="Payment failed"?<button className="text-uppercase fs-1 badge btn Paymentfailed">{dt?.status}</button>:""}
                 {dt?.status=="Failed"?<button className="text-uppercase fs-1 badge btn Failed">{dt?.status}</button>:""}
                 
                </td> 
                 <td> 
                 <span className="text-uppercase fs-1">
                   {dt?.productList[0]?.totalPrice+parseInt(dt?.deliverMode)} {process.env.REACT_APP_CURRENCY}
                 </span>
                </td> 
        	  		<td> 
                  {" "}
                  <Link to={`/orderdetails/${dt?._id}`} className="btn btn-default">
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
                
                <td> 
                  {" "} 
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
