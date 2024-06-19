import React from 'react';
import { useParams } from 'react-router-dom';

const AboutProduct = ({ data }) => {
  const { id } = useParams();
  const product = data.find(p => p.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-12">
          <h2>{product.name}</h2>
          <img src={`../${product.img}`} alt={product.name} style={{ width: '50%', marginBottom: '20px' }} />
          <h3>Key Features</h3>
          <p>{product.keyFeatures}</p>
          <h3>Technology Used</h3>
          <p>{product.technologyUsed}</p>
          <h3>Details</h3>
          <p>{product.details}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
