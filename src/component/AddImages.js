import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import axios from "../helper/axios";
import {useSelector,useDispatch} from "react-redux";

export default function AddProduct() {
  const navigate = useNavigate();
  const auth = useSelector(state=>state.auth);
  const [chooseFile,setChooseFile] = useState([]); 
  const [productName,setProductName] = useState("")
  const [category,setCategory] = useState("")
  const [price,setPrice] = useState("")
  const [discount,setDiscount] = useState("")
  const [description,setDescription] = useState("")
  const [preview,setPreview] = useState([]);
  const maxLength = 5;

  const percentPrice =(price/100)*discount;
  const currentPrice =price-percentPrice;

const arrayofFiles=[]

  const onSelectFile=(e)=>{
      for (var i=0;i < e.target.files.length;i++){
        arrayofFiles.push(e.target.files[i]);
        
    }
    
  let images = [];
  arrayofFiles.map((e)=>{
  const ImageUrl =  URL.createObjectURL(e);
  images.push(ImageUrl)
      
  })
  setPreview(images)
  }
   const removeImageFromArray=(e)=>{
    const index = e.target.id;
    let newPreview = [...preview];

    newPreview.splice(index,1);
    setPreview(newPreview);
  }
 
  const uploadImages=async()=>{ 
    const formData = new FormData();
    // formData.append("multiFile",chooseFile[0]); 
    Object.values(chooseFile).forEach(file=>{
      console.log(file)
      formData.append("multiFile", file);
    }); 
    formData.append("vendorEmail",auth?.user?.email)
    const res = await axios.post("/multiimage",formData, {headers: {
          'Content-Type': 'multipart/form-data'
        }});

    if(res.status===200){
      alert("Image Uploaded Successfully");
      navigate("/image")

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
        <div className="col-md-6">
         
  
  <div className="box-body">
    <div className="row">
          <div className="col-xs-6">
        <input type="file" 
               className="form-control"
               placeholder=".col-xs-5" 
               multiple 
               name="multiFile"
          // onChange={onSelectFile}
          onChange={(e)=>setChooseFile(e.target.files)}/>
      </div>
    </div>
  </div>
  
  {/* /.box-body */}
 
</div>
        <div className="col-md-6">
         
  
  <div className="box-body">
    <div className="row">
    {preview.map(dt=>(
      <div className="col-xs-4">
       {/* <img src={"https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} className="col-xs-12 "/>*/}
     
    <img src={dt} className="col-xs-12 "/>
       

      {/*  <button  id={4}  key={4} onClick={(e) => { removeImageFromArray(e);  }}>
              <i className="fa fa-trash"></i>
            </button>*/}
      </div>  
         ))}
    </div>

  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
        <button className="btn btn-primary" onClick={(e)=>uploadImages()}>Upload Images</button>
      </div> 
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