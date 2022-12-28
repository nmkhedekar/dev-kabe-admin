import React,{useState} from 'react'
import {Link} from "react-router-dom";
import CSV from "../formatCsv.csv"
import Header from '../../header/Header';
import Sidebar from '../../sidebar/VendorSidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {useSelector,useDispatch} from "react-redux";
//import {VendorUploadBulk} from "../../action/VendorAction";


export default function AddVendorProduct() {
const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('excelFile', selectedFile);
    
    const data = {email:auth?.user?.email,formData}
    //dispatch(VendorUploadBulk(data));
  };


	return (
	<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebar/>
         
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
        
        <Link to={CSV} className="btn btn-flat btn-xs" target="_blank" download><i className="fa fa-download"> </i> {" "} Download Bulk Format </Link>
        
          <div className="box-tools pull-right">
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
        </div>
        <div className="box-body">
        <div className="col-md-6">
         
  
  <div className="box-body">
    <div className="row"> 
       
      <div className="col-xs-12"> 
      <input type="file" name="file" onChange={changeHandler} />
      </div>
    </div>
  </div> 


 {/* <div className="box-body">
    <div className="row"> 
       <div className="col-xs-12">
        <div className="progress progress-lg active">
        <div
          className="progress-bar progress-bar-green progress-bar-striped"
          role="progressbar"
          aria-valuenow={80}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: "20%" }}
        >
      <span className="">20% Complete</span>
      </div>
      </div>
      </div>
    </div>
  </div> */}


  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
        <button className="btn btn-primary" onClick={handleSubmission}>Upload</button>
      </div> 
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
       <Tool/> 
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}