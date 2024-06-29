import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const navigate = useNavigate();

  const handleViewMore = (product_name) => {
    navigate(`/product/${product_name}`);
  };

  return (
    <div id="products" className="text-center" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="col-md-12 section-title">
          <h2>Products</h2>
          <p>
            ESSI Integrated Technologies Pvt.Ltd. provides consultancy services
            in wide range of security domains.
          </p>
        </div>

        <style>
          {`
            .product-container {
              margin-bottom: 30px;
            }
            .products-image img {
              width: 70%;
            }
            .service-desc {
              text-align: justify;
            }
            .service-desc button {
              margin-top: 10px;
              padding: 10px 20px;
              background-color: #007bff;
              color: #fff;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              text-decoration: none;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              transition: background-color 0.3s ease;
            }
            .service-desc button:hover {
              background-color: #0056b3;
            }
            @media (max-width: 767px) {
              .service-desc {
                text-align: center;
                margin-top: 0;
              }
            }
            @media (min-width: 768px) {
              .service-desc {
                margin-top: -15px;
              }
            }
          `}
        </style>

        <div className="row" style={{ marginTop: '30px' }}>
          {data ? (
            data.map((product, index) => (
              <div key={`${product.name}-${index}`} className="col-md-12 col-sm-12 product-container">
                <div className="row" style={{ alignItems: 'flex-start' }}>
                  <div className="col-md-4 col-sm-12 products-image">
                    <img
                      src={product.imgs[0]}
                      alt={product.name}
                    />
                  </div>
                  <div className="col-md-8 col-sm-12 service-desc">
                    <h3>{product.name}</h3>
                    <p style={{ textAlign:"justify"}}>{product.text}</p>
                    <button onClick={() => handleViewMore(product.product_name)}>
                      View More
                    </button>
                  </div>
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

export default Products;
