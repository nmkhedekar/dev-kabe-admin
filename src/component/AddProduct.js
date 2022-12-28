import React,{useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';

export default function AddProduct() {
  const [productName,setProductName] = useState("")
  const [category,setCategory] = useState("")
  const [price,setPrice] = useState("")
  const [discount,setDiscount] = useState("")
  const [description,setDescription] = useState("")
  const  [preview,setPreview] = useState([]);
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

  console.log(preview)

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
        Add New Product
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
        <div className="col-md-6">
         
  
  <div className="box-body">
    <div className="row">
      <div className="col-xs-4">
        <input type="text" className="form-control" placeholder="Product Name" onChange={(e)=>setProductName(e.target.value)} />
      </div>
      <div className="col-xs-4">
        <select type="text" className="form-control" placeholder="Product Category" onChange={(e)=>setCategory(e.target.value)}>
         <option>Choose Category</option>
         <option value="Electronic">Electronic</option>
         <option value="Mens">Mens</option>
         <option value="Female">Female</option>
         <option value="Kids">Kids</option>
        </select>
      </div>
      <div className="col-xs-4">
        <input type="file" className="form-control" placeholder=".col-xs-5" multiple onChange={onSelectFile}/>
      </div>
    </div>
  </div>
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
        <textarea type="text" className="form-control" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
      </div> 
    </div>
  </div>
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
        <input type="number" className="form-control" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
      </div> 
    </div>
  </div>
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
        <input type="number" min="0" max="80" className="form-control" placeholder="Discount" onChange={(e)=>setDiscount(e.target.value)}/>
      </div> 
    </div>
  </div>
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
        <button className="btn btn-primary">Add Product</button>
      </div> 
    </div>
  </div>
  {/* /.box-body */}
 
</div>
        <div className="col-md-6">
         
  
  <div className="box-body">
    <div className="row">
      <div className="col-xs-4">
       {/* <img src={"https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} className="col-xs-12 "/>*/}
        <img src={preview[0]} className="col-xs-12 "/>
        <button  id={4}  key={4} onClick={(e) => { removeImageFromArray(e);  }}>
              <i className="fa fa-trash"></i>
            </button>
      </div> 
      <div className="col-xs-8">
         <h4>Product Name : {productName}</h4>
         <h5>Category : {category}</h5>
         <h5>Product Price : {price}</h5> 
         <h5>Discount :  {discount+"%"}</h5> 
         <h5 className="text-danger text-bold">Current Price : {currentPrice+" rs"}</h5> 
         <h5>Description : {description}</h5>
      </div> 
    </div>
  </div>
  <div className="box-body">
    <div className="row">
       <div className="btn btn-app">
        {/*<i className="fa fa-edit" /> Edit*/}
        <img src={preview[1]} width="40"/>
        <button  id={3}  key={3} onClick={(e) => { removeImageFromArray(e);  }}>
              <i className="fa fa-trash"></i>
            </button>
        
       </div>

       <a className="btn btn-app">
        {/*<i className="fa fa-edit" /> Edit*/}
        <img src={preview[2]} width="40"/>
         <button  id={2}  key={2} onClick={(e) => { removeImageFromArray(e);  }}>
              <i className="fa fa-trash"></i>
            </button>
       </a>
       <a className="btn btn-app">
        {/*<i className="fa fa-edit" /> Edit*/}
        <img src={preview[3]} width="40"/>
         <button  id={1}  key={1} onClick={(e) => { removeImageFromArray(e);  }}>
              <i className="fa fa-trash"></i>
            </button>
       </a>
       <a className="btn btn-app">
        {/*<i className="fa fa-edit" /> Edit*/}
        <img src={preview[4]} width="40"/>
         <button  id={0}  key={0} onClick={(e) => { removeImageFromArray(e);  }}>
              <i className="fa fa-trash"></i>
            </button>
       </a> 

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