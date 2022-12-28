import React, {useEffect,useState} from 'react'
import {Link,useParams} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {AddCmsAction,UpdateCmsAction} from "../../action";
import {useDispatch,useSelector} from "react-redux";
import { useForm } from "react-hook-form";

import Editor from "./Editor";

  
export default function AddVendor() {
  const { cmsId } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch =  useDispatch()
  const vendor = useSelector(state=>state?.vendor);
  const auth = useSelector(state=>state); 
  const cmsData = useSelector(state=>state?.category?.cms);
  const obj = {}
  const [inputField , setInputField] = useState(obj)

const inputsHandler = (e) =>{
    let name = e.target.name; 
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
    //setInputField( {[e.target.name]: e.target.value} )
}

 
 const [editorLoaded, setEditorLoaded] = useState(false);
  const [editorData, setData] = useState("");
  const [pageTitle,setPageTitle] = useState("");
  const [slugTitle,setSlugTitle] = useState("");
const onSubmit = () => {
  
   const data={
    pageTitle,slugTitle,editorData
   }
   console.log(data)
   dispatch(AddCmsAction(data));
}


  useEffect(() => {
    setEditorLoaded(true);
    const data = cmsData.find(obj=>{return obj._id===cmsId})
    setPageTitle(data?.pageTitle)
    setData(data?.pageContent)
    setSlugTitle(data?.slugTitle)
    
  }, []); 

  const editData=(id)=>{
    const data={id:cmsId,editorData,pageTitle,slugTitle}
    dispatch(UpdateCmsAction(data))
    alert("CMS Update Successfully")
  }

  

	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/> 
  <div className="content-wrapper"> 
    <section className="content-header">
      <h1>
       Add New Vendor
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
              to="/cmslist"
              type="button"
              className="btn btn-success" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-eye" />
              {" View All CMS Pages"}
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
                        <label htmlFor="inputName" className="col-sm-2 control-label">First Title</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="Page Title" name="fname" value={pageTitle} onChange={(e)=>setPageTitle(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Slug Title</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="Slug Title" name="fname" value={slugTitle} onChange={(e)=>setSlugTitle(e.target.value)} disabled/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
  
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Page Content</label>
                        <div className="col-sm-10">
                        <Editor
       						 name="description"
                   value={editorData}
       						 onChange={(data) => {
       						   setData(data);
       						 }}
        					editorLoaded={editorLoaded}
      					/>

                          {errors.lname && <span className='validationError'>Required</span>}
                        </div>
                      </div>  

      
 
                      
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="button" className="btn btn-danger" onClick={(e)=>editData()}>update</button>
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