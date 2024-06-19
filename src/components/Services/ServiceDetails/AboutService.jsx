import React from 'react';
import { useParams } from 'react-router-dom';

const AboutService = ({ data }) => {
  const { id } = useParams();
  const service = data.find(service => service.id.toString() === id);

  if (!service) return <p>Service not found</p>;

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-12">
          <h2>{service.title}</h2>
          <img src={`../${service.img}`} alt={service.title} style={{ width: '50%', marginBottom: '20px' }} />
          <h3>Key Service</h3>
          <p>{service.text}</p>
          
          <h3>Details</h3>
          <p>{service.text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
