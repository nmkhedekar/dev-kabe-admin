import React,{useState,useRef} from 'react'
import {Link} from "react-router-dom";
import CSV from "./formatCsv.csv"
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import {useSelector,useDispatch} from "react-redux";
import {UploadBulk} from "../action/VendorAction";
import axios from "axios";
import DescriptionTab from "./tab/DescriptionTab"
import StockTab from "./tab/StockTab"



export default function AddProduct() {
const [activeTab, setActiveTab] = useState("tab1");
const auth = useSelector((state)=>state.auth);

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
   const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };


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
        Upload New Product
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

        
          <div className="box-tools pull-right ">
            <Link
              to="/product"
              type="button"
              className="btn btn-success"
              data-toggle="tooltip"
              title="View"
            >
              <i className="fa fa-eye" />
              {" View All Product "}
            </Link>
            {" "}
            <Link to="/addproduct"
              type="button"
              className="btn btn-primary"
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />{" "}
              {"Add Product"}
            </Link>
          </div>
        
        <div className='col-md-12 bulk-desc'>
          <button 
          type="btn"
          className={activeTab === "tab1" ? "active btn-danger" : ""}
          onClick={handleTab1}
          >Description Upload</button>
        </div>
        
        {" "}
        {/* <button 
          type="btn"
          className={activeTab === "tab2" ? "active btn-danger" : ""}
          onClick={handleTab2}>Stock Upload</button> */}
        <div className="Tabs"> 

 
      <div>
        {activeTab === "tab1" ?<DescriptionTab/>
          :<StockTab/>}
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

