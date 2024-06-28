import React from "react";

const Partners = ({ data }) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title">
            <h2>PARTNERS</h2>
            <p>
              ESSI: In Service to the Nation through Innovative Application of Technology for TOTAL SECURITY.
            </p>
          </div>
        </div>

       

        <div className="row">
        {data ? (
          data.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="col-lg-2 col-md-3 col-sm-3 col-xs-6 team">
              <div className="thumbnail">
                <img src={partner} alt={partner.name} className="team-img" />

              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
</div>
      </div>
    </div>
  );
};

export default Partners;
