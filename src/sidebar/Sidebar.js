import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";



import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";


export default function Sidebar() {
  const auth = useSelector(state=>state.auth); 

	return (
		<div>
		<aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img
            src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
            className="img-circle"
            alt="User Image"
          />
        </div>
        <div className="pull-left info">
          <p>{auth.user.fname} {auth.user.lname}</p>
          <a href="#">
            <i className="fa fa-circle text-success" /> Online
          </a>
        </div>
      </div>
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input
            type="text"
            name="q"
            className="form-control"
            placeholder="Search..."
          />
          <span className="input-group-btn">
            <button
              type="submit"
              name="search"
              id="search-btn"
              className="btn btn-flat"
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>

        <li>
          <Link to="/home">
            <i className="fa fa-dashboard" /> <span>Dashboard</span> 
          </Link>
        </li>
        
        <li className="treeview main-menu">
        <Accordion>
                        
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            >
              <Typography
                  style={{
                  fontWeight: 10,
                  }}
              >
                <Link to="#">
                <i class="fa fa-bars"></i>
                  <span>General Options</span>
                  <span className="pull-right-container"> 
                  </span>
                </Link>
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                <ul className="treeview sub-menu"> 
                  <li className=''>
                    <Link to="/generaloption">
                    <i className="fa fa-circle-o" /> <span>Manage General Option</span>
                      <span className="pull-right-container"> 
                      </span>
                    </Link>
                  </li>
                  <li className=''>
                    <Link to="/advertiseList">
                    <i className="fa fa-circle-o" /> <span>Advertise List</span>
                      <span className="pull-right-container"> 
                      </span>
                    </Link>
                  </li>
                  <li className=''>
                    <Link to="/advertiseManagement">
                    <i className="fa fa-circle-o" /> <span>Manage Advertise</span>
                      <span className="pull-right-container"> 
                      </span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/cmslist">
                      <i className="fa fa-circle-o" /> <span>Manage CMS</span>
                        <span className="pull-right-container"> 
                        </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cms">
                      <i className="fa fa-circle-o" /> <span>Add Page</span>
                        <span className="pull-right-container"> 
                        </span>
                    </Link>
                  </li> */}
                </ul>
              </Typography>
          </AccordionDetails>
                        
        </Accordion>
        </li>


        
        
        

        

        
        <li>
          <Link to="/settings">
            <i className="fa fa-gear" /> <span>Settings</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>


        


        <li className="treeview main-menu Offers">
        <Accordion>          
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            >
              <Typography
                  style={{
                  fontWeight: 10,
                  }}
              >
                <Link to="#">
                <i class="fa fa-money"></i>
                  <span>Offers Manage</span>
                  <span className="pull-right-container"> 
                  </span>
                </Link>
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                <ul className="treeview sub-menu"> 
                  <li className=''>
                    <Link to="/coupon">
                    <i className="fa fa-circle-o" /> <span>Coupon</span>
                      <span className="pull-right-container"> 
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/newdeals">
                      <i className="fa fa-circle-o" /> <span>New Deals</span>
                        <span className="pull-right-container"> 
                        </span>
                    </Link>
                  </li>
                </ul>
              </Typography>
          </AccordionDetails>
                        
        </Accordion>
        </li>

        
      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
			
		</div>
	)
}