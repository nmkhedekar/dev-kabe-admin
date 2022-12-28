import React,{useEffect,useState} from 'react'
import {Link,useParams} from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
// import axios from "axios";
import axios from "../helper/axios";
import {useSelector,useDispatch} from "react-redux";


export default function ProductList() {
  let { type,id,productId } = useParams();
  const [allProduct,setAllProduct] = useState([]);
  const auth = useSelector(state=>state.auth);
  const [ value,setValue] = useState([]);
  const [ copied, setCopied] = useState(false);

  const apiData=async()=>{
   const data={email:auth?.user?.email, 
                productId:productId}
    const res= await axios.post("/imagedetails",data);
    console.log(res?.status);
    console.log(res.data)
    if(res.status===200){
      setAllProduct(res?.data);
      setValue(res?.data?.vendorImage)
    }else{
      setAllProduct()
    }
  }

  useEffect(()=>{
    apiData();
  },[])
console.log(allProduct)

const deleteProduct=async(imgName,key)=>{
  // const data={imgName}     
    const data={email:auth?.user?.email, 
                productId:productId,
               imageKey:key,
               imgName:imgName} 
  const res = await axios.post("/deletesingleimagelist",data)
  if(res.status===200){
    apiData();
    alert("Image Deleted");
  }
}

const copyBoard=()=>{
   setCopied(true) 

}
console.log(value)

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
        All Images List
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
            
            <CopyToClipboard text={value}
          onCopy={(e) =>copyBoard()}>
          <button 
              type="button"
              className="btn btn-danger" 
              data-toggle="tooltip"
              title="Add">
             <i className="fa fa-copy " />
              {" Copy All Url "}
          </button>
        </CopyToClipboard>

          {copied?<span style={{color:"#ff0000",padding:"0px 10px"}}>Copied</span>:""}
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
              <th>Product Images</th>
        	  	<th>Product URL</th> 
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {auth?.user?.role===""?allProduct?.map((dt)=>(
        	  	<tr>
        	  		<td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    
                  </span>
                </td>
        	  		<td>
        	  			<span className="text-uppercase fs-1">{dt?.Item_description_EN}</span>
        	  		</td>
                <td>
                  <span className="text-uppercase fs-1">{dt?.email}</span>
                </td>
        	  		<td>
        	  			{dt?.Item_Code}
        	  		</td>
        	  		<td>{dt?.Color_Code}</td>
        	  		<td>{dt?.Season}</td> 
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
              )):allProduct?.vendorImage?.map((dt,key)=>(
              
              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    <img src={dt} height="50" width="50"/>
                  </span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt}</span>
                </td> 
                <td>
                  <button className="btn btn-default" onClick={(e)=>deleteProduct(dt,key)}>
                    <i className="fa fa-trash"></i>
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