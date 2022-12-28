import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

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
        <li className="header">VENDOR NAVIGATION</li>

        <li>
          <Link to="/home">
            <i className="fa fa-dashboard" /> <span>Dashboard</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/product">
            <i className="fa fa-gift" /> <span>Products Manage</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/image">
            <i className="fa fa-image" /><span>Media</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/sync">
            <i className="fa fa-refresh" /><span>Sync ERP</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>
         
        
        <li className="treeview">
          <Link to="#">
            <i className="fa fa-money" />
            <span>Offers Manage</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </Link>
          <ul className="treeview-menu">
            <li>
              <Link to="/coupon">
                <i className="fa fa-circle-o" /> Coupon 
              </Link>
            </li>
            <li>
              <Link to="/newdeals">
                <i className="fa fa-circle-o" /> New Deals
              </Link>
            </li> 
          </ul>
        </li> 

        <li className="header">LABELS</li>
        <li>
          <a href="#">
            <i className="fa fa-circle-o text-red" /> <span>Important</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-circle-o text-yellow" /> <span>Warning</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-circle-o text-aqua" /> <span>Information</span>
          </a>
        </li>
      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
			
		</div>
	)
}