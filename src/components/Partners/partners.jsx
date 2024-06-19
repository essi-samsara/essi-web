import React from "react";

const Partners = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-12 section-title">
          <h2>PARTNERS</h2>
          <p>
            ESSI : In Service to the Nation through Innovative Application of Technology for TOTAL SECURITY.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="col-lg-2 col-md-4 col-sm-4 team">
                  <div className="thumbnail">
                    <img src={partner.img} alt={partner.name} className="team-img" />
                    <div className="caption">
                      <h4>{partner.name}</h4>
                      <p>{partner.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Partners;
