import React from "react";

const Clients = ({ data }) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Clients</h2>
          <p>
            ESSI strives to become the first choice for Application Development,
            Manufacturing, System Integration and Turn Key Project Implementation
            for Integrated Security System, Access Control, Video Surveillance,
            Tolling, and Parking & Intelligent Traffic System.
          </p>
        </div>
        <div className="row">
          {data
            ? data.map((client, index) => (
              
              <div key={`${client.name}-${client.id}`} className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="testimonial">
                  <div className="testimonial-image">
                    <img src={client.img} alt={client.name} />
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-meta">{client.name}</div>
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

export default Clients;
