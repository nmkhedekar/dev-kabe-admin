import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import axios from "../helper/axios";
import {useSelector,useDispatch} from "react-redux";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import { Editor } from "react-draft-wysiwyg";
// import { EditorState } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Multiselect from 'multiselect-react-dropdown';

import Select from 'react-select';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

 
export default function GeneralOption() {
  const [allProduct,setAllProduct] = useState([]);
  const auth = useSelector(state=>state.auth);

  const [key, setKey] = useState('home');
  
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editorData, setData] = useState("");
  

// // Code for Footer
//   const [phone, setphone] = useState();
//   const [email, setemail] = useState();
//   const [address, setaddress] = useState();
//   const [facebook, setfacebook] = useState();
//   const [instagram, setinstagram] = useState();
//   const [youtube, setyoutube] = useState();
//   const [twitter, settwitter] = useState();
  

//   // Stock .... 
   
//   const updateProduct=async(id)=>{
//      const formData = new FormData();
//     //   Object.values(chooseFile).forEach(file=>{
//     //   console.log(file)
//     //   formData.append("multiFile", file);
//     // }); 

//     formData.append("phone",phone) 
//     formData.append("email",email)
//     formData.append("address",address)
//     formData.append("facebook",facebook)
//     formData.append("instagram",instagram)
//     formData.append("youtube",youtube)
//     formData.append("twitter",twitter)
    
   
//       console.log("-----------formData----------", formData);
//     // const res = await axios.post("/addproductmanual",formData, {headers: {
//       const res = await axios.post("https://appapi.albionline.com/api/addproductmanual",formData, {headers: {
//           'Content-Type': 'multipart/form-data'
//         }});
//     if(res.status===200){
//       alert("Product Add Successfull");
//     }
//   }


  // useEffect(() => {
  //   console.log(editorState);
  // }, [editorState]);

  const apiData=async()=>{
    // const data ={email:auth?.user?.email,role:auth?.user?.role}
    // const res= await axios.post("/getVendorProductById",data);
    // const data ={email:auth?.user?.email,role:auth?.user?.role}

    
    // const res= await axios.post("/FaqGet");
    // console.log(res?.status);
    // console.log("----------res.data-----------", res.data)
    // if(res.status===200){
    //   setAllProduct(res?.data[0]);
    // }else{
    //   setAllProduct()
    // }

    
  }

  useEffect(() => {
    console.log(editorState);
    apiData();
  }, [editorState]);

  const faqList = allProduct.faqlist;
  console.log("----------res.data--allProduct--------", faqList)

  // useEffect(()=>{
  //   apiData();
  // },[])
console.log(allProduct)

const deleteProduct=async(descriptionId,stockId)=>{
  const data={descriptionId,stockId}
  const res = await axios.post("/deleteproductlist",data)
  if(res.status===200){
    apiData();
    alert("Product Deleted");
  }
}

// start code for FAQ
const [formFields, setFormFields] = useState([
  { title: '', description: '' },
])
const handleFormChange = (event, index) => {
  let data = [...formFields];
  data[index][event.target.name] = event.target.value;
  setFormFields(data);
}
const submit = (e) => {
  e.preventDefault();
  console.log(formFields)
}
const addFields = () => {
  let object = {
    title: '',
    description: ''
  }

  setFormFields([...formFields, object])
}
const removeFields = (index) => {
  let data = [...formFields];
  data.splice(index, 1)
  setFormFields(data)
}
const submitfaq =async (e) => {
  e.preventDefault();
  console.log("------------formFields----------------", formFields)
  const data = {faqlist:formFields}
  const res = await axios.post("/faqReg",data);
}


const [misFields, setMisFields] = useState([
  { phone: '', email: '', address: '', facebook: '', instagram: '', youtube: '', twitter: '' },
])
const submitmisle =async (e) => {
  e.preventDefault();
  const data = {misleniuslist:misFields}
  console.log("----------mis lenious-------------", data);
  // const res = await axios.post("/faqReg",data);
}
// End code for FAQ
// code for multiple section

const data1 = [
  {
    value: "cerulean",
    label: "cerulean"
  },
  {
    value: "fuchsia rose",
    label: "fuchsia rose"
  },
  {
    value: "true red",
    label: "true red"
  },
  {
    value: "aqua sky",
    label: "aqua sky"
  },
  {
    value: "tigerlily",
    label: "tigerlily"
  },
  {
    value: "blue turquoise",
    label: "blue turquoise"
  }
];
const data2 = [
  {
    value: "cerulean",
    label: "cerulean"
  },
  {
    value: "fuchsia rose",
    label: "fuchsia rose"
  },
  {
    value: "true red",
    label: "true red"
  },
  {
    value: "aqua sky",
    label: "aqua sky"
  },
  {
    value: "tigerlily",
    label: "tigerlily"
  },
  {
    value: "blue turquoise",
    label: "blue turquoise"
  }
];
const data3 = [
  {
    value: "cerulean",
    label: "cerulean"
  },
  {
    value: "fuchsia rose",
    label: "fuchsia rose"
  },
  {
    value: "true red",
    label: "true red"
  },
  {
    value: "aqua sky",
    label: "aqua sky"
  },
  {
    value: "tigerlily",
    label: "tigerlily"
  },
  {
    value: "blue turquoise",
    label: "blue turquoise"
  }
];
// set value for default selection
const [selectedValueRandom, setSelectedValueRandom] = useState([]);
const [selectedValueCustom, setSelectedValueCustom] = useState([]);
const [selectedValueBrand, setSelectedValueBrand] = useState([]);

const currentContentAsHTML= convertToHTML(editorState.getCurrentContent());


  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    console.log("-------currentContentAsHTML----------", currentContentAsHTML);
    // setConvertedContent(currentContentAsHTML);
  }

  console.log("-------xxxxxxxxxxxxxxxxxxxxxxxxxxx----------", currentContentAsHTML);
const [footerinputField , setfooterinputField] = useState({
  phone: '',
  address: currentContentAsHTML,
  email: '',
  facebook: '',
  instagram: '',
  youtube: '',
  twitter: '',
})

const [contactinputField , setcontactinputField] = useState({
  content: '',
})

const [priceinputField , setpriceinputField] = useState({
  min: '',
  max: '',
})

const handleEditorChange = (state) => {
  setEditorState(state);
  convertContentToHTML();
}

  

const inputsHandler = (e) =>{
  const { name, value } = e.target;
 setfooterinputField((prevState) => ({
   ...prevState,
   [name]: value,
 }));
}

const inputsHandlerPrice = (e) =>{
  const { name, value } = e.target;
 setpriceinputField((prevState) => ({
   ...prevState,
   [name]: value,
 }));
}

const inputsHandlerContact = (e) =>{
  const { name, value } = e.target;
 setcontactinputField((prevState) => ({
   ...prevState,
   [name]: value,
 }));
}

const handleChangeRandom = (e) => {
  setSelectedValueRandom(Array.isArray(e) ? e.map(x => x.value) : []);
  const random = JSON.stringify(selectedValueRandom, null, 2)
  console.log("---random--------", random);
}
const handleChangeCustom = (e) => {
  setSelectedValueCustom(Array.isArray(e) ? e.map(x => x.value) : []);
}
const handleChangeBrand = (e) => {
  setSelectedValueBrand(Array.isArray(e) ? e.map(x => x.value) : []);
}

// const homeOjs ={hometitme,homeadd,homexyz}
// conts footerObj ={footer,phone,footerxyz};

const Home = {
  "random":selectedValueRandom,
  "custom":selectedValueCustom,
  "brand":selectedValueBrand
}

console.log("------RANDOM--------", Home);

const Data ={"home":Home,"footer":footerinputField,"contact":contactinputField,"price":priceinputField}



const submitmisle1 = async (e) =>{
  // alert(inputField.first_name)
  console.log("-----------footer---------", footerinputField);
  console.log("-----------contactinputField---------", contactinputField);
  console.log("-----------priceinputField---------", priceinputField);
  const data = {Footerlist:footerinputField}
  // console.log("------allData------------", allData);
  // const allData = JSON.stringify(Data);
  console.log("------allData------------", Data);
  const allData = {allData:Data}
  // const homeobjData ={title,dec}
  // cont data ={}
  const res = await axios.post("/general",allData);
}


// const data1 = [
//   {
//     value: "cerulean",
//     label: "cerulean"
//   },
//   {
//     value: "fuchsia rose",
//     label: "fuchsia rose"
//   },
//   {
//     value: "true red",
//     label: "true red"
//   },
//   {
//     value: "aqua sky",
//     label: "aqua sky"
//   },
//   {
//     value: "tigerlily",
//     label: "tigerlily"
//   },
//   {
//     value: "blue turquoise",
//     label: "blue turquoise"
//   }
// ];
// const data2 = [
//   {
//     value: "cerulean",
//     label: "cerulean"
//   },
//   {
//     value: "fuchsia rose",
//     label: "fuchsia rose"
//   },
//   {
//     value: "true red",
//     label: "true red"
//   },
//   {
//     value: "aqua sky",
//     label: "aqua sky"
//   },
//   {
//     value: "tigerlily",
//     label: "tigerlily"
//   },
//   {
//     value: "blue turquoise",
//     label: "blue turquoise"
//   }
// ];
// const data3 = [
//   {
//     value: "cerulean",
//     label: "cerulean"
//   },
//   {
//     value: "fuchsia rose",
//     label: "fuchsia rose"
//   },
//   {
//     value: "true red",
//     label: "true red"
//   },
//   {
//     value: "aqua sky",
//     label: "aqua sky"
//   },
//   {
//     value: "tigerlily",
//     label: "tigerlily"
//   },
//   {
//     value: "blue turquoise",
//     label: "blue turquoise"
//   }
// ];
// // set value for default selection
// const [selectedValueRandom, setSelectedValueRandom] = useState([]);
// const [selectedValueCustom, setSelectedValueCustom] = useState([]);
// const [selectedValueBrand, setSelectedValueBrand] = useState([]);


// handle onChange event of the dropdown
// const handleChangeRandom = (e) => {
//   setSelectedValueRandom(Array.isArray(e) ? e.map(x => x.value) : []);
//   const random = JSON.stringify(selectedValueRandom, null, 2)
//   console.log("---random--------", random);
// }
// const handleChangeCustom = (e) => {
//   setSelectedValueCustom(Array.isArray(e) ? e.map(x => x.value) : []);
// }
// const handleChangeBrand = (e) => {
//   setSelectedValueBrand(Array.isArray(e) ? e.map(x => x.value) : []);
// }




	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  {auth?.user?.role==="Vendor"?<VendorSidebar/>:<Sidebarr/>}
         
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        General Options
        <small>it all starts here</small>
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="#">General Option</a>
        </li>
        <li className="active">Manage General Option</li>
      </ol>
    </section>
    {/* Main content */}

    <section class="content">
        <div class="row">
            <div class="col-sm-9">
            <div class="box">
                <div class="box-body order-detail">
                <div className='generaloption'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Home">
                    <h4>Home</h4>
                        <div className='footer-general'>
                          <div className='text-area col-md-12 conatct brand'>
                            <h4>Random Brands</h4>
                            <div className='text-box'>
                            {/* <Multiselect
                              displayValue="key"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                                {
                                  cat: 'Group 1',
                                  key: 'Option 1'
                                },
                                {
                                  cat: 'Group 1',
                                  key: 'Option 2'
                                },
                                {
                                  cat: 'Group 1',
                                  key: 'Option 3'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 4'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 5'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 6'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 7'
                                }
                              ]}
                              placeholder="Custom"
                            /> */}
                            <Select
                              className="dropdown"
                              placeholder="Select Option"
                              value={data1.filter(obj => selectedValueRandom.includes(obj.value))} // set selected values
                              options={data1} // set list of the data
                              onChange={handleChangeRandom} // assign onChange function
                              isMulti
                              isClearable
                            />
                            {/* <div><b>Selected Value: </b> {JSON.stringify(selectedValueRandom, null, 2)}</div> */}

                              {/* {selectedValueRandom && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                                      <div><b>Selected Value: </b> {JSON.stringify(selectedValueRandom, null, 2)}</div>
                                    </div>} */}
                            </div>
                          </div>

                          <div className='text-area col-md-12 conatct brand'>
                            <h4>Custom Order Brands</h4>
                            <div className='text-box'>
                            {/* <Multiselect
                              displayValue="key"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                                {
                                  cat: 'Group 1',
                                  key: 'Option 1'
                                },
                                {
                                  cat: 'Group 1',
                                  key: 'Option 2'
                                },
                                {
                                  cat: 'Group 1',
                                  key: 'Option 3'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 4'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 5'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 6'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 7'
                                }
                              ]}
                              placeholder="Custom"
                            /> */}

                            <Select
                              className="dropdown"
                              placeholder="Select Option"
                              value={data2.filter(obj => selectedValueCustom.includes(obj.value))} // set selected values
                              options={data2} // set list of the data
                              onChange={handleChangeCustom} // assign onChange function
                              isMulti
                              isClearable
                            />
                            {/* <div><b>Selected Value: </b> {JSON.stringify(selectedValueCustom, null, 2)}</div> */}
                            </div>
                          </div>

                          <div className='text-area col-md-12 conatct brand'>
                            <h4>Custom Order Vendors</h4>
                            <div className='text-box'>
                            {/* <Multiselect
                              displayValue="key"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                                {
                                  cat: 'Group 1',
                                  key: 'Option 1'
                                },
                                {
                                  cat: 'Group 1',
                                  key: 'Option 2'
                                },
                                {
                                  cat: 'Group 1',
                                  key: 'Option 3'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 4'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 5'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 6'
                                },
                                {
                                  cat: 'Group 2',
                                  key: 'Option 7'
                                }
                              ]}
                              placeholder="Custom"
                            /> */}
                            <Select
                              className="dropdown"
                              placeholder="Select Option"
                              value={data3.filter(obj => selectedValueBrand.includes(obj.value))} // set selected values
                              options={data3} // set list of the data
                              onChange={handleChangeBrand} // assign onChange function
                              isMulti
                              isClearable
                            />
                            {/* <div><b>Selected Value: </b> {JSON.stringify(selectedValueBrand, null, 2)}</div> */}
                            </div>
                          </div>

                          
                        </div>
                        <button onClick={submitmisle1} className="update-mislenious">Update</button>
                        
                    </Tab>
                    <Tab eventKey="footer" title="Footer">
                        <h4>Footer</h4>
                        <div className='footer-general'>
                            {/* <div className='col-md-12 footer-header'> */}
                                <div className='col-md-6 phone'>
                                    <h4>Phone</h4>
                                    <input
                                        name='phone'
                                        placeholder=''
                                        // onChange={event => handleFormChange(event, index)}
                                        // value=""
                                        onChange={inputsHandler}
                                        value={footerinputField.phone}
                                        />
                                </div>
                                <div className='col-md-6 phone'>
                                    <h4>Email</h4>
                                    <input
                                        name='email'
                                        placeholder=''
                                        // onChange={event => handleFormChange(event, index)}
                                        onChange={inputsHandler}
                                        value={footerinputField.email}
                                        />
                                </div>
                            {/* </div> */}
                        
                            <div className='text-area col-md-12'>
                                <h4>Address</h4>
                                <div className='text-box'>
                                    {/* <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}> */}
                                    <div style={{ border: "1px solid #ccd0d4", padding: '2px', minHeight: '400px' }}>
                                        {/* <Editor
                                        name="address"
                                        editorState={editorState}
                                        onEditorStateChange={setEditorState}
                                        onChange={inputsHandler}
                                        // onChange={(e)=>setEditorState(e.target.value)}
                                        value={footerinputField.address}
                                        /> */}
                                        {/* <Editor
                                        name="address"
                                        editorStateFooter={editorStateFooter}
                                        onEditorStateChangeFooter={setEditorStateFooter}
                                        onChange={(e)=>inputsHandler()}
                                        value={footerinputField.address}
                                        /> */}
                                        {/* <Editor
                                          editorState={editorState}
                                          onEditorStateChange={handleEditorChange}
                                          wrapperClassName="wrapper-class"
                                          editorClassName="editor-class"
                                          toolbarClassName="toolbar-class"
                                        /> */}
                                        <Editor
                                          name="description"
                                          value={editorData}
                                          onChange={(data) => {
                                            setData(data);
                                          }}
                                          editorLoaded={editorLoaded}
                                        />
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3 social'>
                                    <h4>Facebook</h4>
                                    <input
                                        name='facebook'
                                        placeholder=''
                                        // onChange={event => handleFormChange(event, index)}
                                        onChange={inputsHandler}
                                        value={footerinputField.facebook}
                                        />
                                </div>
                            <div className='col-md-3 social'>
                                    <h4>Instagram</h4>
                                    <input
                                        name='instagram'
                                        placeholder=''
                                        // onChange={event => handleFormChange(event, index)}
                                        onChange={inputsHandler}
                                        value={footerinputField.instagram}
                                        />
                            </div>
                            <div className='col-md-3 social'>
                                    <h4>Youtube</h4>
                                    <input
                                        name='youtube'
                                        placeholder=''
                                        // onChange={event => handleFormChange(event, index)}
                                        onChange={inputsHandler}
                                        value={footerinputField.youtube}
                                        />
                            </div>
                            <div className='col-md-3 social'>
                                    <h4>Twitter</h4>
                                    <input
                                        name='twitter'
                                        placeholder=''
                                        // onChange={event => handleFormChange(event, index)}
                                        onChange={inputsHandler}
                                        value={footerinputField.twitter}
                                        />
                            </div>
                        </div>
                        <button onClick={submitmisle1} className="update-mislenious">Update</button>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <h4>Contact</h4>
                        <div className='footer-general'>
                            
                            <div className='text-area col-md-12 conatct'>
                                <h4>Content</h4>
                                <div className='text-box'>
                                    {/* <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}> */}
                                    <div style={{ border: "1px solid #ccd0d4", padding: '2px', minHeight: '400px' }}>
                                        {/* <Editor
                                        name="content"
                                        editorStateContent={editorStateContent}
                                        onEditorStateChangeContent={setEditorStateContent}
                                        onChange={(e)=>inputsHandlerContact()}
                                        value={contactinputField.content}
                                        /> */}
                                        <Editor
                                        name="content"
                                        // editorState={editorState}
                                        // onEditorStateChange={setEditorState}
                                        onChange={inputsHandlerContact}
                                        value={contactinputField.content}
                                        />
                                        {/* <Editor
                                          editorState={editorState}
                                          onChange={setEditorState}
                                          wrapperClassName="wrapper-class"
                                          editorClassName="editor-class"
                                          toolbarClassName="toolbar-class"
                                        /> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button onClick={submitmisle1} className="update-mislenious">Update</button>
                    </Tab>
                    <Tab eventKey="faq" title="Faq">
                    <h4>Faq</h4>
                        <div className='footer-general'>
                            <div className='text-area col-md-12 conatct'>
                                <h4>List</h4>
                              <table className="table table-bordered table-striped dataTable faq-general-option" id="">
                                <thead>
                                  <tr className='faq-table-header'>
                                    <th className="fw-bold">No.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Remove</th>
                                  </tr>
                                </thead>
                                <tbody>
                                {/* <form onSubmit={submitfaq}> */}

                                {/* {faqList?.length>0  &&faqList?.map((dt, index)=>(
                                  <tr key={index}>
                                      <td className='faq-table-header'>{index + 1}</td>
                                      <td className='faq-table-header'>
                                        <span className="text-uppercase fs-1">
                                        <input
                                        name='title'
                                        placeholder=''
                                        onChange={event => handleFormChange(event, index)}
                                        value={dt.title}
                                        />
                                        </span>
                                      </td>
                                      <td className='faq-table-header description'>
                                        <span className="text-uppercase fs-1">
                                          <textarea
                                          name='description'
                                          placeholder=''
                                          onChange={event => handleFormChange(event, index)}
                                          value={dt.description}
                                          type="textarea"
                                            />
                                        </span>
                                      </td> 
                                      <td className='faq-table-header'>
                                        <button onClick={() => removeFields(index)}>Remove</button>
                                      </td>
                                    </tr>
                                ))} */}

                                {formFields.map((form, index) => {
                                  return (
                                    
                                    <tr key={index}>
                                      <td className='faq-table-header'>{index + 1}</td>
                                      <td className='faq-table-header'>
                                        <span className="text-uppercase fs-1">
                                        <input
                                        name='title'
                                        placeholder=''
                                        onChange={event => handleFormChange(event, index)}
                                        value={form.title}
                                        />
                                        </span>
                                      </td>
                                      <td className='faq-table-header description'>
                                        <span className="text-uppercase fs-1">
                                          <textarea
                                          name='description'
                                          placeholder=''
                                          onChange={event => handleFormChange(event, index)}
                                          value={form.description}
                                          type="textarea"
                                            />
                                        </span>
                                      </td> 
                                      <td className='faq-table-header'>
                                        <button onClick={() => removeFields(index)}>Remove</button>
                                      </td>
                                    </tr>
                                    
                                  )
                                })}
                              {/* </form> */}
                              </tbody>
                              </table>

                              {/* {faqList?.map((dt)=>(
                                  <div className=''>
                                    {dt.title}
                                    </div>
                                    ))} */}
                              <button className='add-row' onClick={addFields}>Add Row</button>
                              <button onClick={submitfaq}>Update</button>
                            </div>
                        </div>
                    {/* <button onClick={addFields}>Add More..</button> */}
                    {/* <br />
                    <button onClick={submit}>Submit</button> */}
                    </Tab>
                    {/* <Tab eventKey="info" title="Info">
                        <h4>Info</h4>
                        <div className='footer-general'>
                                <div className='col-md-12 info-bar'>
                                    <h4>Info Bar</h4>
                                    <input type="text" />
                                </div>

                                <div className='col-md-12 enable info-bar'>
                                    <h4>Enable Info Bar</h4>
                                    <input type="checkbox" />
                                </div>

                                <div className='col-md-12 confetti info-bar'>
                                    <h4>Enable Confetti Animation</h4>
                                    <input type="checkbox" />
                                </div>
                        </div>
                    </Tab> */}
                    <Tab eventKey="max-price" title="Max-Min Price">
                        <div className='footer-general'>
                                <div className='col-md-6 phone'>
                                    <h4>Min Price</h4>
                                    <input
                                        name='min'
                                        placeholder=''
                                        onChange={inputsHandlerPrice}
                                        value={priceinputField.min}
                                        />
                                </div>
                                <div className='col-md-6 phone'>
                                    <h4>Max Price</h4>
                                    <input
                                        name='max'
                                        placeholder=''
                                        onChange={inputsHandlerPrice}
                                        value={priceinputField.max}
                                        />
                                </div>
                        </div>
                        <button onClick={submitmisle1} className="update-mislenious">Update</button>
                    </Tab>
                    </Tabs>
                    
                    
                    
                </div>
                </div>
            </div>
            </div>
            <div class="col-sm-3">
            <div class="box">
                <div class="box-body od-sec-3">
                <div class="postbox-headerr">
                    <div>
                    <h5 class="hndle ui-sortable-handle">Publish</h5>
                    </div>
                    <div>
                    <span class="woocommerce-help-tip">
                        <i class="fa fa-solid fa-chevron-up"></i>
                    </span>
                    <span class="woocommerce-help-tip">
                        <i class="fa fa-solid fa-chevron-down"></i>
                    </span>
                    <span class="woocommerce-help-tip">
                        <i class="fa fa-solid fa-sort-up"></i>
                    </span>
                    </div>
                </div>
                <div class="posthead-content update">
                    {/* <a href="#" data-toggle="modal" data-target="#modal-default">Click here print order</a> */}
                    <button className='update-btn'>Update</button>
                </div>
                </div>
            </div>
            </div>
        </div>
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

{/*<img src={dt?.stocks?.LNK+dt?.stocks?.Item_Full_Code+dt?.stocks?.FOTO1} height="50" width="50"/>*/}
