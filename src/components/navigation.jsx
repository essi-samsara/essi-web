import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img 
            src="img/logo/essilogo.png" 
            className="navbar-brand" 
            alt="logo" 
            style={{ height: '50px', width: '150px', padding: '0px', margin: '0px'}} 
          />
          <Link className="navbar-brand page-scroll" to="/">
          </Link>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className="page-scroll">
                Home
              </Link>
            </li>
            
            <li>
              <Link to="/products" className="page-scroll">
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" className="page-scroll">
                Services
              </Link>
            </li>
            
            <li>
              <Link to="/clients" className="page-scroll">
                Clients
              </Link>
            </li>
            <li>
              <Link to="/contact" className="page-scroll">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
