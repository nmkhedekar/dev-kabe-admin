import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {AddCouponAction} from "../../action";
import {useDispatch,useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";

import Editor from "./Editor";

  
export default function AddVendor() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selected, setSelected] = useState([]);
  const [fixedProductDiscount,setFixedProductDiscount] = useState(false);
  const dispatch =  useDispatch()
  const vendor = useSelector(state=>state?.vendor);
  const auth = useSelector(state=>state); 
  const obj = {}
  const [inputField , setInputField] = useState(obj)
  const options = [
  { label: "Items A", value: "Items A" },
  { label: "Items B", value: "Items B" },
  { label: "Items C", value: "Items C" },
];

const inputsHandler = (e) =>{
    let name = e.target.name; 
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
    //setInputField( {[e.target.name]: e.target.value} )
}

 
 const [editorLoaded, setEditorLoaded] = useState(false); 
  const [couponCode,setCouponCode] = useState("");
  const [couponPrice,setCouponPrice] = useState("");
  const [couponDescription,setCouponDescription] = useState("");
  const [couponType,setCouponType] = useState("");
  const [couponUsage,setCouponUsage] = useState("");
  const [couponExpire,setCouponExpire] = useState(""); 
  const [indivisualUse,setIndivisualUse] = useState(false);
  const [excludeUse,setExcludeUse] = useState(false); 
  const [productList,setProductList] = useState([]);



const onSubmit = () => { 
   const data={
    couponCode,
    couponDescription,
    couponType,
    couponUsage,
    couponExpire,
    indivisualUse,
    excludeUse,
    productList:selected,
    couponPrice
  } 
   dispatch(AddCouponAction(data)); 
}


  useEffect(() => {
    setEditorLoaded(true);
  }, []);

 const randomCoupon=()=>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *charactersLength));
   }
    setCouponCode(result);
}

const optionOnChange=(value)=>{
setCouponType(value)
if(value==="Fixed Product Discount"){
  setFixedProductDiscount(true)
}else{
  setFixedProductDiscount(false)
}

}
 

  

	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/> 
  <div className="content-wrapper"> 
    <section className="content-header">
      <h1>
       Add New Coupon
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
    <section className="content"> 
      <div className="box">
      <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            <Link
              to="/couponlist"
              type="button"
              className="btn btn-success" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-eye" />
              {" View Coupons"}
            </Link> 
          </div>
        </div>

        <div className="box-body">
        <section className="content">
          <div className="row">  
            <div className="col-md-12">
              <div className="nav-tabs-custom">
                {/* <ul className="nav nav-tabs"> 
                  <li className="active"><a href="#settings" data-toggle="tab">Update Profile</a></li>
                </ul> */}
                <div className="tab-content">
                  <div className="active tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Code</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="..." name="fname" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                          <button type="button" className="btn btn-primary" onClick={(e)=>randomCoupon()} style={{marginTop:"10px"}}>Generate Coupon</button>
                        </div> 
                      </div>

                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Prices</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" onChange={(e)=>setCouponPrice(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
  
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Description</label>
                        <div className="col-sm-10">
                        <Editor
       						 name="description"
       						 onChange={(data) => {
       						   setCouponDescription(data);
       						 }}
        					editorLoaded={editorLoaded}
      					/>

                          {errors.lname && <span className='validationError'>Required</span>}
                        </div>
                      </div> 


                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Type</label>
                        <div className="col-sm-10"> 
                        <select className="form-control" onChange={(e)=>optionOnChange(e.target.value)}>
                          <option></option>
                          <option value="Percentage Discount">Percentage Discount</option>
                          <option value="Fixed Cart Discount">Fixed Cart Discount</option>
                          <option value="Fixed Product Discount">Fixed Product Discount</option> 
                        </select>
                        </div> 
                      </div> 
                      {fixedProductDiscount?
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Products List</label>
                        <div className="col-sm-10"> 
                        <MultiSelect
                           options={options}
                           value={selected}
                           onChange={setSelected}
                           labelledBy="Select"
                        />
                        </div> 
                      </div>:""}
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Usage</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="Eg: 100 people" name="fname" onChange={(e)=>setCouponUsage(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Coupon Expire Date</label>
                        <div className="col-sm-10">
                          <input type="date"  className="form-control" id="inputName" placeholder="Eg: 100 people" name="fname" onChange={(e)=>setCouponExpire(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>



                       <div className="form-group">
                        <div className="col-sm-10"> 

                        <h4 className="text-center">Usage restriction</h4>
                        </div> 
                      </div>

                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Indivisual use only</label>
                        <div className="col-sm-10">
                          <input type="checkbox" id="inputName" placeholder="Eg: 100 people" name="fname" onChange={(e)=>setIndivisualUse(e.target.checked)}/>
                          <span>{" "}Check this box if the coupon cannot be used in conjuction with other coupons</span>
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Exculed sale items</label>
                        <div className="col-sm-10">
                          <input type="checkbox" id="inputName" placeholder="Eg: 100 people" name="fname" onChange={(e)=>setExcludeUse(e.target.checked)}/>
                          <span>{" "}Check this box if the coupon should not apply to items on sale. Per-item coupons will only work if the item is not on sale. Per-cart  coupons will only work if there are items in the cart  that are not on sale</span>
                        </div> 
                      </div>

      
 
                      
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="button" className="btn btn-danger" onClick={(e)=>onSubmit()}>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 
        </section> 
        </div>
       </div> 
    </section> 
  </div> 
  <Footer/>
       <Tool/> 
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}