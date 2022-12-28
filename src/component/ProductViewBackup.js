import React,{useEffect,useState} from 'react' 
import {useParams,Link } from 'react-router-dom';
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Footer from '../footer/Footer';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";

export default function ProductView() {
  let { type,id,productId } = useParams();
	const auth = useSelector(state=>state.auth);
  const [product,setProduct] = useState([]);
  const apiData=async()=>{
    const data={email:auth?.user?.email,
                role:auth?.user?.role,
                productId:productId}
    const res=await axios.post("/productdetail",data)
    if(res.status===200){
      setProduct(res.data);
    }
  }

  useEffect(()=>{
    apiData();
  },[])

console.log(product);
	return (
		<div>
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  {auth?.user?.role==="Vendor"?<VendorSidebar/>:<Sidebarr/>}
  <div className="content-wrapper"> 
        <section className="content-header">
          <h1>
            Product Details
          </h1>
          <ol className="breadcrumb">
            <li><Link to="/"><i className="fa fa-dashboard" /> Home</Link></li> 
            <li className="active">User profile</li>
          </ol>
        </section> 
        <section className="content">
          <div className="row">
            <div className="col-md-3"> 
              <div className="box box-primary">
                <div className="box-body box-profile"> 
                <img src={product[0]?.stocks?.LNK+product[0]?.stocks?.Item_Full_Code+product[0]?.stocks?.FOTO1}
                height="320"
                width="100%"
                />
                </div> 
              </div> 
              <div className="box box-primary">
                <div className="">
                  <h3 className="box-title ">
                  <div className="row">
                    <ul className="col-sm-8">
                      <li><img src={product[0]?.stocks?.LNK+product[0]?.stocks?.Item_Full_Code+product[0]?.stocks?.FOTO2} height="40" width="40"/></li>
                      <li><img src={product[0]?.stocks?.LNK+product[0]?.stocks?.Item_Full_Code+product[0]?.stocks?.FOTO3} height="40" width="40"/></li>
                      <li><img src={product[0]?.stocks?.LNK+product[0]?.stocks?.Item_Full_Code+product[0]?.stocks?.FOTO4} height="40" width="40"/></li>
                    </ul>
                    </div>
                  </h3>
                </div> 
                 
              </div> 
            </div> 
            <div className="col-md-9">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs"> 
                  <li className="active"><a href="#settings" data-toggle="tab">Details</a></li>
                </ul>
                <div className="tab-content">
                  <div className="active tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-4 control-label">Product Name</label>
                        <p className="col-sm-8 control-label">{product[0]?.Item_description_EN}</p> 
                      </div>  
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-4 control-label">Items Code</label>
                        <p className="col-sm-8 control-label">{product[0]?.Item_Full_Code}</p> 
                      </div>  
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-4 control-label">Items Composition Value</label>
                        <p className="col-sm-8 control-label">{product[0]?.Item_Composition_Value_EN}</p> 
                      </div>  

                    </form>
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </section> 
      </div>  
<Footer/> 
   
  <div className="control-sidebar-bg" />
</div>

      
    </div>
		</div>
	)
}