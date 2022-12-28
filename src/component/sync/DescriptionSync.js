import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import VendorSidebar from '../../sidebar/VendorSidebar';
import Footer from '../../footer/Footer';
import SyncGif from "./loader.gif";
import SuccessGif from "./success.gif";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import DescriptionTab from "./syncTab/DescriptionTab";
import StockTab from "./syncTab/StockTab";

export default function DescriptionSync() {
	const [activeTab, setActiveTab] = useState("tab1");
	const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
   const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
	const auth = useSelector(state=>state.auth);
	const syncAuth = useSelector(state=>state.vendor);
	const dispatch = useDispatch();
	const synchronization = syncAuth.syncDescription;
  const synchronizationStock = syncAuth.syncStock;
	console.log(synchronization)
	const syncStock=()=>{

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
        Add New Images
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
              to="/image"
              type="button"
              className="btn btn-success"
              data-toggle="tooltip"
              title="View"
            >
              <i className="fa fa-eye" />
              {" View All Images "}
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
        <div className="col-md-12">
         
  
  <div className="text-center">
 	    <button 
         type="btn"
         className={activeTab === "tab1" ? "active btn btn-danger" : "btn"}
         onClick={handleTab1}
         >Sync Description</button>
        {" "}
        {/* <button 
          type="btn"
          className={activeTab === "tab2" ? "active btn btn-danger" : "btn"}
          onClick={handleTab2}
          >Sync Stock</button> */}

          <div className="text-center">
        {activeTab === "tab1" ?<DescriptionTab/>
          :<StockTab/>}
      </div>


  	{/*<button className="btn btn-primary" onClick={(e)=>syncDescription()}>Sync Description</button>{" "}
  	<button className="btn btn-danger" onClick={(e)=>syncStock()}>Sync Stock</button>
  	*/}<div>
  		{synchronization==true?<div>
  			<img src={SyncGif}/>
  		</div>:synchronization==false?<div>
  			<img src={SuccessGif}/>
  			<p>Description Sync Successfully Done</p>
  		</div>:""}
  	</div>

    <div>
      {synchronizationStock==true?<div>
        <img src={SyncGif}/>
      </div>:synchronizationStock==false?<div>
        <img src={SuccessGif}/>
        <p>Stock Sync Successfully Done</p>
      </div>:""}
    </div>
  </div>
  
  {/* /.box-body */}
 
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
       
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}