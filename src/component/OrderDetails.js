import React,{useEffect,useState, useRef} from 'react' 
import { useReactToPrint } from 'react-to-print';

import {Link,useParams} from "react-router-dom";
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import axios from "../helper/axios";
import Invoice from './Invoice';
import "./style.css";
// import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import moment from "moment-js"
import Pdf from "react-to-pdf"; 
const ref = React.createRef();


export default function ProductList() {
  const [allProduct,setAllProduct] = useState([]);
  const [statusValue,setStatusValue] = useState([]);
  const [notex,setNotes] = useState("");
  const [orderIdx,setOrderId] = useState();
  const [allNotes,setAllNotes] = useState([]);
  const [vatData,setVatData] = useState();
  const auth = useSelector(state=>state.auth);
  let { id } = useParams();

  const apiData=async()=>{ 
    const data={id:id}
    const res= await axios.post("/getorderslist",data);
    console.log(res?.status);
    console.log(res.data)
    if(res.status===200){
      setAllProduct(res?.data);
    }else{
      setAllProduct()
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

  // allProduct?.map(dtx=>{
  //   setOrderId(dtx?.orderId);
  // })

 const getNotes=async()=>{ 
  const res = await axios.post("/getnotes")
  console.log(res.data)
  setAllNotes(res.data);
 }  

  useEffect(()=>{
    apiData();
    allProduct?.map(dtx=>{
    setOrderId(dtx?.orderId);
  })

    getNotes();
    vatGetData();
  },[])
  var sum=0;
allProduct.forEach(dt=>{
  for (let key in dt?.productList) {

                sum += dt?.productList[key].totalPrice*dt?.productList[key].quantity;
            }
})

var totalPriceData = sum+parseFloat(vatData);

const deleteProduct=async(descriptionId,stockId)=>{
  const data={descriptionId,stockId}
  const res = await axios.post("/deleteproductlist",data)
  if(res.status===200){
    apiData();
    alert("Product Deleted");
  }
}

for (let key in allProduct?.productList) {
  console.log(allProduct?.productList)
                sum += allProduct.productList[key].totalPrice*allProduct.productList[key].qty;
            }
            console.log(sum)

 const updateOrder=async()=>{
   const data={id:id,statusValue:notex}

    const res= await axios.post("/updateorder",data);
    await sendNotes();
    if(res.status===200){
      alert("Order Update");
    }
    
 }      


 const sendNotes=async()=>{
  const data = {orderId:orderIdx,notes:notex}
  console.log(orderIdx)
  const res = await axios.post("/sendnotes",data)
  await getNotes();
  if(res.status===200){
    alert("Note Status updated")
  }
 }     



 

  return (
    <>
    <div className="sidebar-mini skin-green-light admin-content">
    <div className="wrapper"> 
        <Header/> 
        {auth?.user?.role==="Vendor"?<VendorSidebar/>:<Sidebarr/>}
         
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>Order Details</h1>
    </section> 
    {/* Main content */}
    <section className="content">
      {/* Default box */}
      <div class="row">
      <div class="col-sm-9">
      <div className="box">
        {/*<div className="box-header with-border"> 
          <div className="box-tools pull-right">
            <Link
              to="/addproduct"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Product "}
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
        </div>*/}
        <div className="box-body order-detail">

          {allProduct?.map(dt=>(
            <div>
            <div class="od-heading">
              <h4>Order #{dt?.orderId} Details {}</h4> 
              <h5>Payment via Me para në dorë. Customer IP: 46.99.32.38</h5>
            </div> 
              <div class="col-sm-4">
                <h4>General</h4>
                <div>
                  <h5>Date Created:</h5> 
                     
                    <input type="text" value={moment(dt.createdAt).format('YYYY-mm-dd')} readOnly={true}/>
                  

                  
                </div>
                <div>
                  <h5>Status</h5>
                  <select className="form-control"  value={dt?.status} onChange={(e)=>setStatusValue(e.target.value)}>
                    <option value="On hold">On hold</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Open">Open</option>
                    <option value="Verified">Verified</option>
                    <option value="Delivery ready">Delivery ready</option>
                    <option value="Pick up at the store">Pick up at the store</option>
                    <option value="launched">launched</option>
                    <option value="conducted">conducted</option>
                    <option value="Pending payment">Pending payment</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="return">return</option>
                    <option value="Payment failed">Payment failed</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>
                <div>
                  <div class="od-customer">
                   {/* <div>
                      <p>Customer:</p>
                    </div>
                    <div>
                      <a href="#">Profile <span><i class="fa fa-arrow-right"></i></span></a>
                      <a href="#">View other orders <span><i class="fa fa-arrow-right"></i></span></a>
                    </div>*/}
                  </div>
                  {/*<select className="form-control"  value={dt?.status} onChange={(e)=>setStatusValue(e.target.value)}>          
                    <option value="On hold">On hold</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Open">Open</option>
                    <option value="Verified">Verified</option>
                    <option value="Delivery ready">Delivery ready</option>
                    <option value="Pick up at the store">Pick up at the store</option>
                    <option value="launched">launched</option>
                    <option value="conducted">conducted</option>
                    <option value="Pending payment">Pending payment</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="return">return</option>
                    <option value="Payment failed">Payment failed</option>
                    <option value="Failed">Failed</option>
                  </select>*/}
                </div>
              </div>
              <div class="col-sm-4 billingg">
                <div class="od-billing">
                  <h4>Billing Address</h4>
                  <a href="#"><i class="fa fa-pencil"></i></a>
                </div>
                <p>{dt?.address}</p>
                <p>Rr.Deshmoret e Kombit</p>
                <p>Deçan</p>
                <p>Kosovë</p>
                <div class="od-email">
                  <h5>Email Address:</h5>
                  <a href="#">{dt?.email}</a>
                </div>
                <div class="od-phone">
                  <h5>Phone:</h5>
                  <a href="#">{dt?.phoneNumber}</a>
                </div>
              </div>
              <div class="col-sm-4 shippingg">
              <div class="od-shipping">
                <h4>Shipping Address</h4>
                <a href="#"><i class="fa fa-pencil"></i></a>
              </div>
                <p>{dt?.address}</p>
                <p>Rr.Deshmoret e Kombit</p>
                <p>Deçan</p>
              </div>
              
              
              

              </div>
            ))}
        </div>
        {/* /.box-body */}
        {/*<div className="box-footer">Footer</div>*/}
        {/* /.box-footer*/}
      </div>

      <div className="box">
        <div className="box-body od-box-body">
          {/*{allProduct?.map(dt=>(
            <div> 
               <span className="text-uppercase fs-1">{dt?.productList?.map(xx=>(
                <ul>
                    <img src={xx.productImg} height="40" width="40"/>
                    <p>{xx.productName}</p>
                    <p>{xx.totalPrice}$</p>
                    <p>{xx.qty}</p>
               </ul>
                    ))}</span>
              </div>
               ))} */}


<table class="od-table">
  <thead>
  <tr class="od-tr">
    <th class="item">Item <span><i class="fa fa-arrow-up"></i></span></th>
    <th class="item-cost itemm" >Send</th>
    <th class="item-cost itemm">Approved</th>
    <th class="item-cost itemm">Cost(inc VAT)</th>
    <th class="item-cost">Cost</th>
    <th class="item-cost">Qty</th>
    <th class="item-cost">Total</th>
    <th class="item-cost">TVSH 18%</th>
  </tr>
  </thead>
  <tbody>
  
   {allProduct[0]?.productList?.map(pdx=>(
  <tr>
    <td class="thumb">
      <div class="wc-order-item-thumbnail"><img width="150" height="150" src={pdx?.productImg} class="attachment-thumbnail size-thumbnail" loading="lazy"/></div> 
      <div class="name">
      <a href="#">{pdx?.productName}F</a>
      <div class="wc-order-item-sku"><strong>SKU:</strong> 3274477-75-3-034</div>
      <div class="wc-order-item-variation"><strong>Variation ID:</strong> 277445</div>
      <div class="view">
      <table cellspacing="0" class="display_meta">
             
              <tbody>
      

              <tr>
          <th>Fulfillment Status:</th>
          <td><p>Unfulfilled</p>
</td>
        </tr>
              <tr>
          <th>Commission Status:</th>
          <td><p>Unpaid</p></td>
        </tr>
              <tr>
          <th>sent:</th>
          <td><p>1</p>
</td>
        </tr>
              <tr>
          <th>approved:</th>
          <td><p>1</p>
</td>
        </tr>
          </tbody>
        
          </table>

  </div>
  <em class="wcpv-sold-by-order-details">Sold By: <a href="https://management.albionline.com/vendor/women-secret/" title="Women'secret">Women'secret</a></em>
    </div>






    </td>

 
    <td>
    <i class="fa fa-solid fa-check"></i>
    </td>
    <td>
    <i class="fa fa-solid fa-check"></i>
    </td>
    <td>
      <div class="view">{vatData} {process.env.REACT_APP_CURRENCY}</div>
    </td>
    <td>
      <div class="view">{pdx?.totalPrice} €</div>
    </td>
    <td>
      <div class="view">× {pdx?.quantity}</div>
    </td>
    <td>
      <div class="view">{parseFloat(pdx?.totalPrice).toFixed(2)*parseFloat(pdx?.quantity).toFixed(2)+parseFloat(vatData)+parseInt(allProduct[0].deliverMode)} €</div>
    </td>
    <td>
      <div class="view">0.0 €</div>
    </td>
  </tr>
   ))}

 
  </tbody>
  <tbody>
    <tr>
      
      <td class="thumb">
      <span><i class="fa fa-solid fa-truck"></i></span>
        <p class="standard-p">Standard</p>
        <tbody><tr>
          <td class="thumbb">Items:</td>
          <td class="thumbbb">
            <p>Pizhame me dizajn lulesh (pjesa e poshtme) - M, 441920 × 1, Bluzë pambuku - M, B5A9BF × 1</p>
          </td>
        </tr>
          </tbody>

      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{vatData} {process.env.REACT_APP_CURRENCY}</td>
      <td>-</td>
    </tr>
  </tbody>
  

</table>

<div class="od-sec-1">
<div class="od-total">
  <div>
    <p>Items subtotal:</p>
    <p>{sum.toFixed(2)} €</p>
  </div>
  <div>
    <p>Shipping:</p>
    <p>{parseInt(allProduct[0]?.deliverMode)} €</p>
  </div>
  <div>
    <p>TVSH 18%:</p>
    <p>{vatData} €</p>
  </div>
  <div>
    <p>Order Total:</p>
    <p>{parseInt(sum.toFixed(2))+parseInt(vatData)+parseInt(allProduct[0]?.deliverMode)} {process.env.REACT_APP_CURRENCY}</p>
  </div>
</div>
<div class="od-refund">
  <button>Refund</button>
  <span class="description">
    <span class="woocommerce-help-tip"><i class="fa fa-solid fa-question"></i></span> 
    This order is no longer editable.
  </span>
</div>

</div>

        </div>
      </div>
      <div className="box">
        <div className="box-body od-sec-2"> 
          <div class="postbox-header">
            <div>
              <h4 class="hndle ui-sortable-handle">Downloadable product permissions</h4>
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-question"></i></span> 
            </div>
            <div>
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-up"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-down"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-sort-up"></i></span> 
            </div>
          </div> 
          <div class="posthead-content">
          <div class="input-group mb-3 input-header">
            <input type="text" class="form-control" placeholder="Search a downdloadable product" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Grant Access</button>
          </div>
          </div>

        </div>
        
      </div>
      </div>

      <div class="col-sm-3">
        <div className="box">
        <div className="box-body od-sec-3"> 
          <div class="postbox-headerr">
            <div>
              <h5 class="hndle ui-sortable-handle">Print Order</h5>
            </div>
            <div>
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-up"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-down"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-sort-up"></i></span> 
            </div>
          </div> 
          <div class="posthead-content">
            <a href="#" data-toggle="modal" data-target="#modal-default">Click here print order</a> 
          </div>  

        </div>
        </div>
        <div className="box">
        <div className="box-body od-sec-3"> 
          <div class="postbox-headerr">
            <div>
              <h5 class="hndle ui-sortable-handle">Print Fiscal</h5>
            </div>
            <div>
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-up"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-down"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-sort-up"></i></span> 
            </div>
          </div> 
          <div class="posthead-content">
            <a href="#">Click here print fiscal</a>
          </div>

        </div>
        </div>
        <div className="box">
        <div className="box-body od-sec-3"> 
          <div class="postbox-headerr">
            <div>
              <h5 class="hndle ui-sortable-handle">Order actions</h5>
            </div>
            <div>
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-up"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-down"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-sort-up"></i></span> 
            </div>
          </div> 
          <div class="posthead-content choose-actions">
            <select className="form-control" value={allProduct[0]?.status} onChange={(e)=>setStatusValue(e.target.value)} onChange={(e)=>setNotes(e.target.value)}>          
               <option value="On hold">On hold</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Open">Open</option>
                    <option value="Verified">Verified</option>
                    <option value="Delivery ready">Delivery ready</option>
                    <option value="Pick up at the store">Pick up at the store</option>
                    <option value="launched">launched</option>
                    <option value="conducted">conducted</option>
                    <option value="Pending payment">Pending payment</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="return">return</option>
                    <option value="Payment failed">Payment failed</option>
                    <option value="Failed">Failed</option>
            </select>
            <button><i class="fa fa-solid fa-chevron-right"></i></button>
          </div>
          <div class="posthead-bottom">
            <a href="#">Move to trash</a>
            <button class="btn-update" onClick={(e)=>updateOrder()}>Update</button>
          </div>

        </div>
        </div>

        <div className="box">
        <div className="box-body od-sec-3"> 
          <div class="postbox-headerr">
            <div>
              <h5 class="hndle ui-sortable-handle">Order notes</h5>
            </div>
            <div>
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-up"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-down"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-sort-up"></i></span> 
            </div>
          </div> 
          <div class="posthead-content">
            <div class="inside">
              <ul class="order-notes">
                {/*<li class="note">
                  <div class="note_content">
                    <p>Order status changed from Verifikuar to Nisur.</p>
                  </div>
                  <p class="meta">
                    <abbr class="exact-date" title="2022-10-11 15:41:09">11/10/2022 at 15:41</abbr>by Shaqir Uka
                    <a href="#" class="delete_note" role="button"> Delete note</a>
                  </p>
                </li>*/}
                {allNotes?.map(dtt=>(
                <li class="note system-note">
                  <div class="note_content">
                    <p>{dtt?.notes}</p>
                  </div>
                  <p class="meta">
                    <abbr class="exact-date" title="2022-10-11 15:41:09">11/10/2022 at 15:41</abbr>by Shaqir Uka
                    <a href="#" class="delete_note" role="button"> Delete note</a>
                  </p>
                </li> 
                ))}
              </ul>
            </div>
          </div>
          <div class="posthead-bottomm">
            <div class="posthead-bottom-part1">         
             <div class="form-floating">
               <label for="floatingTextarea">Add note <span><i class="fa fa-solid fa-question"></i></span></label>
               <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e)=>setNotes(e.target.value)}></textarea>
            </div>
            </div>
            <div class="posthead-bottom-part2">
              <select className="form-control">          
                <option value="On-Hold">Private note</option>
                <option value="Reject">Note to customer</option>           
              </select>
              <button class="btn-update" onClick={(e)=>sendNotes()}>Add</button>
            </div>
          </div>

        </div>
        </div>

        <div className="box">
        <div className="box-body od-sec-2"> 
          <div class="postbox-header">
            <div>
              <h5 class="hndle ui-sortable-handle">Order  fields</h5>       
            </div>
            <div>
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-up"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-chevron-down"></i></span> 
              <span class="woocommerce-help-tip"><i class="fa fa-solid fa-sort-up"></i></span> 
            </div>
          </div> 
          <div class="posthead-content">
          <div class="input-group mb-3 input-headerr">
            <label for="floatingTextarea">Guide Order</label>
            <input type="text" class="form-control" aria-label="Recipient's username" />
          </div>
          </div>
        </div>
      </div>
      </div>
      </div> 
    </section> 
  </div> 
  <Footer/>
  <Tool/> 
  <div className="control-sidebar-bg" />
</div> 
</div>
<Invoice/> 
  </>
) 
}

{/*<img src={dt?.stocks?.LNK+dt?.stocks?.Item_Full_Code+dt?.stocks?.FOTO1} height="50" width="50"/>*/}
