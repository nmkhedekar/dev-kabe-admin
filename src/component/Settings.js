import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import axios from "../helper/axios";
import {useSelector,useDispatch} from "react-redux";


export default function Settings() {
  const auth = useSelector(state=>state.auth);
  const [vatData,setVatData] = useState("");

  const addVat=async()=>{
    const data = {vatData:vatData}
    const res = await axios.post("/vatupdate",data);
    if(res.status===200){
      alert("Vat Data Updated ");
    }
  }

  const vatGetData=async()=>{ 
    const res= await axios.post("/getvatupdate");
    console.log(res?.status);
    console.log(res.data)
    if(res.status===200){
      setVatData(res?.data[0].vatData);
    }else{
      setVatData()
    }
  }

  useEffect(()=>{
    vatGetData();
  },[])
  

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
        Settings
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
        </div>
        <div className="box-body">
         <label>Add VAT</label>{" "}
         <input type="text" className="" value={vatData} onChange={(e)=>setVatData(e.target.value)}/>	 {" "}
         <button className="" onClick={(e)=>addVat()}>Update VAT</button>
        </div> 
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
