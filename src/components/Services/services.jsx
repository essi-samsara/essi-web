import React from "react";
import { useNavigate } from "react-router-dom";

const Services = (props) => {
  const navigate = useNavigate();

  const handleViewMore = (serviceId) => {
    console.log(`View more clicked for service id: ${serviceId}`);
    navigate(`/service/${serviceId}`);
  };

  return (
    <div id="services" className="text-center" style={{ marginTop: "10px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title mt-5">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((service, index) => (
              <div key={`${service.title}-${index}`} className="col-xs-6 col-md-6 mb-4" style={{ padding: "0 50px" }} >
                <i className="icon-container">
                  <img src={service.icon} alt="Service Icon" />
                </i>
                <h3>{service.title}</h3>
                <p className="text-left" style={{ textAlign: "justify" }}>{service.text}</p>
                <button
                  onClick={() => handleViewMore(service.id)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    textDecoration: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  View More
                </button>
              </div>
            ))
          ) : (
            <div className="col-md-12 text-center">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
