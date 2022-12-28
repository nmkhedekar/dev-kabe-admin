import React,{useEffect,useState} from 'react' 
import {useParams,Link } from 'react-router-dom';
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Footer from '../footer/Footer';
import axios from "../helper/axios";
import {useSelector,useDispatch} from "react-redux";
import "../product.css";

export default function ProductView() {
  let { type,id,productId } = useParams();
	const auth = useSelector(state=>state.auth);
  const [product,setProduct] = useState([]);
  const [name,setname] = useState();
  const [item_code,setitem_code] = useState();
  const [description,setdescription] = useState();
  const [retail_unite_of_meassure,setretail_unite_of_meassure] = useState();
  const [regular_price,setregular_price] = useState();
  const [sale_price,setsale_price] = useState();
  const [tax_class,settax_class] = useState();
  const [dimensions,setdimensions] = useState();
  const [color,setcolor] = useState();
  const [age,setage] = useState();
  const [brand,setbrand] = useState();
  const [stock_status,setstock_status] = useState();
  const [vendor,setvendor] = useState();
  const [product_manufacturer_code,setproduct_manufacturer_code] = useState();
  const [product_cat,setproduct_cat] = useState();
  const [properties,setproperties] = useState();
  const [properties_en,setproperties_en] = useState();
  const [composition,setcomposition] = useState();
  const [composition_en,setcomposition_en] = useState();
  const [components,setcomponents] = useState();
  const [components_en,setcomponents_en] = useState();
  const [collectionn,setcollectionn] = useState();
  const [ordering,setordering] = useState();
  const [origine,setorigine] = useState();



  const apiData=async()=>{
    const data={email:auth?.user?.email,
                role:auth?.user?.role,
                productId:productId}
    const res= await axios.post("/productdetail",data)
    if(res.status===200){
      setProduct(res.data);
      setname(res.data[0].name)
      setitem_code(res.data[0].item_code)
      setdescription(res.data[0].description)
      setretail_unite_of_meassure(res.data[0].retail_unite_of_meassure)
      setregular_price(res.data[0].regular_price)
      setsale_price(res.data[0].sale_price)
      settax_class(res.data[0].tax_class)
      setdimensions(res.data[0].dimensions)
      setcolor(res.data[0].color)
      setage(res.data[0].age)
      setbrand(res.data[0].brand)
      setstock_status(res.data[0].stock_status)
      setvendor(res.data[0].vendor)
      setproduct_manufacturer_code(res.data[0].product_manufacturer_code)
      setproduct_cat(res.data[0].product_cat)
      setproperties(res.data[0].properties)
      setproperties_en(res.data[0].properties_en)
      setcomposition(res.data[0].composition)
      setcomposition_en(res.data[0].composition_en)
      setcomponents(res.data[0].components)
      setcomponents_en(res.data[0].components_en)
      setcollectionn(res.data[0].collectionn)
      setordering(res.data[0].ordering)
      setorigine(res.data[0].origine)
 
          }
  }

  useEffect(()=>{
    apiData();
  },[])

  const updateProduct=async(id)=>{
    const updateData={
      _id:id,
      name,
      item_code,
      description,
      retail_unite_of_meassure,
      regular_price,
      sale_price,
      tax_class,
      dimensions,
      color,
      age,
      brand,
      stock_status,
      vendor,
      product_manufacturer_code,
      product_cat,
      properties,
      properties_en,
      composition,
      composition_en,
      components,
      components_en,
      collectionn,
      ordering,
      origine

    }
    const res = await axios.post("/updatedescription",updateData);
    if(res.status===200){
      alert("Update Successfull");
    }
  }

console.log(product);
	return (
		<div>
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  {auth?.user?.role==="Vendor"?<VendorSidebar/>:<Sidebarr/>}
         <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Edit Product
        <small>it all starts here</small>
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="#">Examples</a>
        </li>
        <li className="active">Blank page</li>
      </ol>
    </section>
    {/* Main content */}




    <section className="content">
      <div className="box box-default xpadding"> 
  <div className="box-body xbox">
    <div className="row">
      <div className="col-md-4"> 
          <label>Name</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            value={name}
            onChange={(e)=>setname(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Item_code</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={item_code}
            onChange={(e)=>setitem_code(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Description</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={description}
            onChange={(e)=>setdescription(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Retail_unite_of_meassure</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={retail_unite_of_meassure}
            onChange={(e)=>setretail_unite_of_meassure(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Regular_price</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={regular_price}
            onChange={(e)=>setregular_price(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Sale_price</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={sale_price}
            onChange={(e)=>setsale_price(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Tax_class</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={tax_class}
            onChange={(e)=>settax_class(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Dimensions</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={dimensions}
            onChange={(e)=>setdimensions(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Color</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={color}
            onChange={(e)=>setcolor(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Age</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={age}
            onChange={(e)=>setage(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Brand</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={brand}
            onChange={(e)=>setbrand(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Stock_status</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={stock_status}
            onChange={(e)=>setstock_status(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Vendor</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={vendor}
            onChange={(e)=>setvendor(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Product_manufacturer_code</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={product_manufacturer_code}
            onChange={(e)=>setproduct_manufacturer_code(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Product_cat</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={product_cat}
            onChange={(e)=>setproduct_cat(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Properties</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={properties}
            onChange={(e)=>setproperties(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Properties_en</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={properties_en}
            onChange={(e)=>setproperties_en(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Composition</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={composition}
            onChange={(e)=>setcomposition(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Composition_en</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={composition_en}
            onChange={(e)=>setcomposition_en(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Components</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={components}
            onChange={(e)=>setcomponents(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Components_en</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={components_en}
            onChange={(e)=>setcomponents_en(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Collectionn</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={collectionn}
            onChange={(e)=>setcollectionn(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Ordering</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={ordering}
            onChange={(e)=>setordering(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>Origine</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}
            value={origine}
            onChange={(e)=>setorigine(e.target.value)}
            aria-hidden="true"
          />  
      </div>



      
      
    </div>
  </div>
  <div className="box-footer">
  <button className="btn btn-success" onClick={(e)=>updateProduct(product[0]._id)}>Update</button>
  </div>
</div>

    </section>
    {/* /.content */}
  </div>
 
<Footer/> 
    
</div>

      
    </div>
		</div>
	)
}