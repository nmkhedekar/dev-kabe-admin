import React,{useEffect,useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import {GetCategoryAction,AddCategorAction} from '../action/CategoryAction';
import {useDispatch,useSelector} from 'react-redux'

export default function AddProduct() { 
  const [root,setRoot] = useState("") 
  const [category,setCategory] = useState("") 
  const dispatch = useDispatch();
  const [chooseFile,setChooseFile] = useState([]); 
  const categoryValue = useSelector(state=>state?.category)
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(GetCategoryAction())
  },[])
console.log(categoryValue)
//   const renderCategories=(categoryData)=>{
//     var categoriesList=[];
// console.log(categoryData[0].children)
//     for(var cate of categoryData){
//       categoriesList.push(<li>{cate.name}{cate.children.length>0?<ul>{renderCategories(cate?.children)}</ul>:""}</li>)
//       // categoriesList.push(<option>{cate.name}{cate?.children?.length>0?cate.name:""}</option>) 
//     }
//     return categoriesList;

//   }

  const createCategoryList=(categories,options=[])=>{
    for(var category of categories){
      options?.push({value:category?._id,name:category?.name});
      if(category?.children?.length>0){
        // createCategoryList(category?.children,options)
        createCategoryList(category?.name)
      }
    } 
    return options;
  }

  const addCategory=()=>{
    const formData = new FormData();
    formData.append("categoryIcon",chooseFile[0]);  
    formData.append("parentId",root);  
    formData.append("name",category);  
    // const data={parentId:root,name:category,categoryIcon}
    // console.log(data)
    dispatch(AddCategorAction(formData));
    navigate("/category")

  }


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
        Add New Categories
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
              to="/category"
              type="button"
              className="btn btn-success"
              data-toggle="tooltip"
              title="View"
            >
              <i className="fa fa-eye" />
              {" View All Category "}
            </Link>
          </div>
        </div>
        <div className="box-body">
        <div className="col-md-6">
          
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
      <label>Root Category</label>
        <select type="number" className="form-control" placeholder="Price" onChange={(e)=>setRoot(e.target.value)}>
           {/*<optgroup>{renderCategories(categoryValue?.categories?.categoryList)}</optgroup>*/}
        
        {/*{renderCategories(categoryValue?.categories?.categoryList)}*/}
        <option>Choose Categories</option>
        {
          createCategoryList(categoryValue?.categories?.categoryList).map(dt=>(

        <option key={dt?._id} value={dt?.value}>{dt.name}</option>
            ))
      }
      </select>
      </div> 
    </div>
  </div>
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
      <label>Category Name</label>
        <input type="text"  className="form-control" onChange={(e)=>setCategory(e.target.value)}/>
      </div> 
    </div>
  </div>
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
      <label>Category Icon</label>
        <input type="file" name="categoryIcon"  className="form-control" onChange={(e)=>setChooseFile(e.target.files)}/>
      </div> 
    </div>
  </div>
  <div className="box-body">
    <div className="row">
      <div className="col-xs-12">
        <button className="btn btn-primary" onClick={(e)=>addCategory()}>Add Category</button>
      </div> 
    </div>
  </div>
  {/* /.box-body */}
 
</div>
        <div className="col-md-6">
         
  
  <div className="box-body">
    <div className="row">
      
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