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
          <div className="row">
            {[1, 2, 3].map(index => (
              <div key={index} className="col-md-4 mb-4">
                <img src={`../${service.img}`} alt={service.name} style={{ width: '100%', marginBottom: '20px' }} />
              </div>
            ))}
          </div>
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
