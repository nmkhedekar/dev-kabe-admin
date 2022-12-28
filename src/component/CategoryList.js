import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import {GetCategoryAction,AddCategorAction,DeleteCategoryAction} from '../action/CategoryAction';
import {useDispatch,useSelector} from 'react-redux'
import CheckboxTree from 'react-checkbox-tree'; 
import {IoIosCheckbox,IoIosCheckboxOutline,IoIosArrowForward,IoIosArrowDown} from "react-icons/io";
import 'react-checkbox-tree/lib/react-checkbox-tree.css';  

export default function ProductList() {
  const [checked,setChecked] = useState([]);
  const [expanded,setExpanded] = useState([]);
  const [checkedArray,setCheckedArray] = useState([]);
  const [expandedArray,setExpandedArray] = useState([]);
  const dispatch = useDispatch();
  const categoryValue = useSelector(state=>state?.category)

    const renderCategories=(categoryData)=>{ 
    var categoriesList=[]; 
    for(var cate of categoryData){
      categoriesList?.push({
                label:cate?.name,
                value:cate?._id,
                parentId:cate?.parentId,
                children:cate?.children?.length>0 && renderCategories(cate?.children)
              });
     }
    return categoriesList;
   }
    useEffect(()=>{
      dispatch(GetCategoryAction())
    },[])

   const rederDeleteCategory=()=>{
      const data = {ids:checked}
      dispatch(DeleteCategoryAction(data))
   }

   const renderUpdateCategory=()=>{
    const categoriex = renderCategories(categoryValue?.categories?.categoryList)
    console.log(categoriex)
    const checkArray = [];
    const expandArray = [];
    checked.length>0 && checked.forEach((categoryId,index)=>{
      console.log(categoryId)
      const category= categoriex.find((categoryx,_index)=>categoryId==categoryx.value)
      console.log(category)
      category && checkArray.push(category)
      console.log(category)
    })

    // expanded.length>0 && expanded.forEach((categoryId,index)=>{
    //   const category= categories.find((category,_index)=>categoryId==category._id )
    //   category && expandedArray.push(category)
    // })
    // console.log((checked,expandArray))
   }






	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/>
         
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        All Category List
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
        <div className="box-tools pull-left">
        <button className="btn btn-default" onClick={(e)=>rederDeleteCategory()}><i className="fa fa-trash"></i> Delete</button>{" "}
        <button className="btn btn-default" onClick={(e)=>renderUpdateCategory()}><i className="fa fa-edit"></i> Edit</button>
        </div>
          <div className="box-tools pull-right">
            <Link
              to="/addcategory"
              type="button"
              className="btn btn-primary" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Category "}
            </Link> 
          </div>
        </div>
        <div className="box-body">
        {categoryValue?.categories?.categoryList?.length>0?
        <CheckboxTree
                nodes={ renderCategories(categoryValue?.categories?.categoryList)}
                checked={checked}
                expanded={expanded}
                onCheck={checked => setChecked(checked)}
                onExpand={expanded => setExpanded(expanded)}
                   icons={{ 
        halfCheck: <IoIosCheckbox/>,
        expandClose: <IoIosArrowForward/>,
        expandOpen: <IoIosArrowDown/> 
    }}
            />:""}
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