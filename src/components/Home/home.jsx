import React from "react";
import About from "../About/about";
import ClientsComponent from "../Clients/clients";
import Clientsdata from '../../data/data.json';

const Header = ({ data }) => {
  const { title = '', title2='',  paragraph = '', paragraph2='' } = data || {};

  return (
    <header id="home">
      <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 intro-text">
              <h1>{title} <span> {title2}</span></h1>
              <p>{paragraph} <br/> {paragraph2}</p>
              <img
                src="/img/intro/intro5.png"
                className="img-fluid" 
                alt="Image 3"
              />
              <h3>Homeland Security | Defence | Government | Intelligence</h3>
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
