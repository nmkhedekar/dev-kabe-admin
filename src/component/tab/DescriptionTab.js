import React,{useState,useRef} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import CSV from "./descriptionFormat.csv"
import axios from "../../helper/axios";



export default function DescriptionTab() {
    const [chooseFile,setChooseFile] = useState("");
    const [percentage,setPercentage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const auth = useSelector((state)=>state.auth);
  const descriptionUploadFileBtn=async()=>{
    const formData = new FormData();
    formData.append("file",chooseFile[0]);
    formData.append("email",auth?.user?.email);
    formData.append("role",auth?.user?.role);
      await axios.post("/uploadexcel",formData,{
                        headers: { "Content-Type": "multipart/form-data" },
                            onUploadProgress: (data) => {
                            setPercentage(Math.round((100 * data.loaded) / data.total));
                             
                            },
                        })
         .then(function(response){
                  console.log(response);
         })
                 .catch(function (response) {
                   console.log(response);




                 });



 }
    return (
        <div>



        
           <div className="box-body">
             <div className="col-md-6">
             <div className="box-body">
             <div className="row">
             <div className="col-xs-12">
             <Link to={CSV} className="btn btn-flat btn-xs" target="_blank" download><i className="fa fa-download"> </i> {" "} Download Decription Bulk Format </Link>
             </div>
             </div>
             </div>
  
  <div className="box-body">

    <div className="row">
       
      <div className="col-xs-12">
       {/* <input type="file" name="file" className="form-control" placeholder=".col-xs-5" accept=".xlsx" onChange={changeHandler}/>*/}
           <input
            type="file"
            id="file"
            className="form-control"
            name="file"
            onChange={(e)=>setChooseFile(e.target.files)}
            
          />
      </div>
    </div>
  </div>




  <div className="box-body">
    <div className="row">
       <div className="col-xs-12">
        <div className="progress progress-lg active">
        <div
          className="progress-bar progress-bar-green progress-bar-striped"
          role="progressbar"
          aria-valuenow={80}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${percentage}%` }}
        >
      <span className="">{percentage}% Complete</span>
      </div>
      </div>
      </div>
    </div>
  </div>
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
        <button className="btn btn-primary" onClick={(e)=>descriptionUploadFileBtn()}>Upload</button>
      </div>
    </div>
  </div>
  {/* /.box-body */}
           </div>
           </div>
            
        </div>
    )
}