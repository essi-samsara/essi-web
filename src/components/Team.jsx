import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
  <div className="container">
    <div className="col-md-12  section-title">
      <h2>PARTNERS</h2>
      <p>
      ESSI : In Service to the Nation through Innovative Application of Technology for TOTAL SECURITY.
      </p>
    </div>
    <div className="row">
      {props.data
        ? props.data.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-lg-2 col-md-4 col-sm-4 team">
              <div className="thumbnail">
                <img src={d.img} alt="..." className="team-img" />
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  </div>
</div>
  );
};
