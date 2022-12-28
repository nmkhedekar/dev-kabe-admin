import React from 'react'
import Dashboard from '../component/DashboardCard';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import {useDispatch,useSelector} from "react-redux";

export default function DashboardPage() {
	const auth = useSelector(state=>state.auth);
	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  {auth?.user?.role==="Vendor"?<VendorSidebar/>:<Sidebar/>}
  		 {/* <Sidebar/>
  		  <VendorSidebar/>*/}
          <div className="content-wrapper"> 
          	<Dashboard/> 
  		  </div>

       <Footer/>
       <Tool/> 
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}