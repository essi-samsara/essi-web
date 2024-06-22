import React from "react";
import About from "../About/about";
import ClientsComponent from "../Clients/clients";
import Clientsdata from '../../data/data.json';

const Header = ({ data }) => {
  const { title = '', paragraph = '', Clients = [] } = data || {};

  return (
    <header id="home">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <h1>{title || "Integrated Security"} <span>Solutions</span></h1>
                <p>{paragraph || "ESSI provides a comprehensive solution to secure premises from every possible threat through use of its Extensive Knowledge and Expertise"}</p>
                <a href="#home" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <ClientsComponent data={Clientsdata.Clients} />
    </header>
  );
};

export default Header;
