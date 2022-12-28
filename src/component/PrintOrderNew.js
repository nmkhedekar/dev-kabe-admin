import React,{useEffect,useState, useRef} from 'react'
import {Link,useParams} from "react-router-dom"; 
import QRCode from "react-qr-code";
import Pdf from "react-to-pdf"; 
import axios from "../helper/axios";
const ref = React.createRef();

export default function PrintOrder() { 
  const {id} = useParams();
   
    const printOrder = () => {
        const printableElements = document.getElementById('printme').innerHTML;
        let aaaa = '<html><head><title></title></head><body>' + printableElements + '</body></html>'
        const oldPage = document.body.innerHTML;
        document.body.innerHTML = aaaa;
        window.print();
        document.body.innerHTML = oldPage
    }

const [invoiceData,setInvoiceData] = useState([]);
  const [vatData,setVatData] = useState();


    const apiData=async()=>{ 
    const data = {id:id}
    const res= await axios.post("/getinvoice",data);
    console.log(res?.status);
    console.log(res.data)
    if(res.status===200){
      setInvoiceData(res?.data);
    }else{
      setInvoiceData()
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
   


    useEffect(() => {
      setTimeout(() => { 
        printOrder();
      }, 3000);
        apiData();
        vatGetData();
    }, []);


  var sum=0;
invoiceData.forEach(dt=>{
  for (let key in dt?.productList) {

                sum += dt?.productList[key].totalPrice*dt?.productList[key].qty;
            }
})

console.log(invoiceData)
var totalPriceData = sum+parseFloat(vatData);


  return (
    <>
      <div className="modal-content invoice-content" id="printme">
        <div className="modal-body invoice-modal" ref={ref}>
        <div className="payment-reciept">

        <div  style={{backgroundColor:"#000",color:"#fff",padding:"5px"}}>
          <div className="reciept-header">
            <div className="part-1">
              <p>Veternik 10000 Prishtina, Kosovë</p>
              <h5 className='info'>www.albi.com<span>Tel: +383 (0) 48 300 800</span> </h5>
            </div>
            <div className="part-2">
              <img src={process.env.PUBLIC_URL + '/dist/img/logo.jpg'} alt="" width="130px" />
            </div> 
          </div>
          </div>
          
          <div className="reciept-between">
            <table>
              <tbody><tr>
                  <th>DËRGESA</th>
                  <th />
                  <th />
                </tr>

                <tr>
                  <td className='heading td'>Emri</td>
                  <td>{invoiceData[0]?.fname}</td>    
                  <td />    
                </tr> 

                <tr>
                  <td className='heading td'>Mbiemri</td>
                  <td>{invoiceData[0]?.lname}</td>    
                  <td />    
                </tr> 

                <tr>
                  <td className='heading td'>Adresa</td>
                  <td>{invoiceData[0]?.address}</td>    
                  <td />    
                </tr> 

                <tr>
                  <td className='heading td'>Qyteti</td>
                  <td>{invoiceData[0]?.city}</td>    
                  <td />    
                </tr> 

                <tr>
                  <td className='heading td'>Shteti</td>
                  <td>Fiona</td>    
                  <td />    
                </tr> 

                <tr>
                  <td className='heading td'>Telefoni</td>
                  <td>{invoiceData[0]?.phoneNumber}</td>    
                  <td />    
                </tr> 
                
                
              </tbody></table>
            <table>
              <tbody>
                <tr>
                  <th>POROSIA</th>
                  <th /><th />
                </tr>  

                 <tr>
                    <td className='heading td'>Data</td>
                  <td>{invoiceData[0]?.productList.map((dt)=>(
                    <div><p>{dt?.productName}</p><br/></div>
                    ))}</td>    
                  <td />   
                </tr> 

                <tr>
                  <td className='heading td'>Mënyra e</td>
                  <td>{invoiceData[0]?.theWayOf || "XXX"}</td>    
                  <td />    
                </tr> 

                <tr>
                  <td className='heading td'>pagesës</td>
                   <td>{invoiceData[0]?.paymentMethod}</td>     
                  <td />    
                </tr> 

                <tr>
                  <td className='heading td'>Mënyra e</td>
                <td>{invoiceData[0]?.theWayOf || "XXX"}</td>     
                  <td />    
                </tr> 

                <tr>
                  <td className='heading td'>Transportit</td>
                 <td>{invoiceData[0]?.transportation || "XXX"}</td>   
                  <td />    
                </tr> 
                
                
              </tbody></table>
          </div>
          <div className="reciept-footer">
            <div className="row">
              <div className="col-sm-3">
                <p>ID E POROSISË</p>
               <p className="text-sm">#{invoiceData[0]?.orderId || "XXX"}</p>
                {/* <img src={process.env.PUBLIC_URL + '/dist/img/barcode.jpg'} alt="" width="80%" /> */}
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 80, width: "100%" }}>
                <QRCode
                size={256}
                style={{ height: "auto", width: "100%" }}
                value={invoiceData[0]?.orderId || "null"}
                viewBox={`0 0 256 256`}
                />
                </div>
              </div>
              <div className="col-sm-9">
                <div className="part-footer">
                  <div className="partt">
                    <div className="part-a">
                      <p>Nëntotali </p>
                      <p>{sum.toFixed(2)} {process.env.REACT_APP_CURRENCY}</p>
                    </div>
                    <div className="part-a">
                      <p>Transporti</p>
                      <p>0.0 {process.env.REACT_APP_CURRENCY}</p>
                    </div>
                  </div>
                  <div className="parttt">
                    <p>Totali Përfshirë TVSH </p>
                    <p>{totalPriceData.toFixed(2)} {process.env.REACT_APP_CURRENCY}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> 
      </div> 
  </>
) 
}

 