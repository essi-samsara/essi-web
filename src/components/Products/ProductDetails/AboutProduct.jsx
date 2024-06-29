import React from 'react';
import { useParams } from 'react-router-dom';

const AboutProduct = ({ data }) => {
  const { product_name } = useParams();
  const product = data.find(p => p.product_name.toString() === product_name);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mt-5" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-12">
          <h2>{product.name}</h2>
          <p>{product.subTitle}</p>
          <div className="row">
            {product.imgs.map((img, index) => (
              <div key={index} className="col-md-4 mb-4">
                <img 
                  src={`../${img}`} 
                  alt={product.name} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '20px' }} 
                />
              </div>
            ))}
          </div>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-md-8">
              <h3>Key Features:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {product.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
          </div>
          <div className="row" style={{marginBottom:'50px'}}>
            
            <div className="col-md-8">
              <h3>Technology Used</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'justify' }}>
                {product.technologiesUsed.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
