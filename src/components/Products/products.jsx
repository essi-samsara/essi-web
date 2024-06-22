import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const navigate = useNavigate();

  const handleViewMore = (productId) => {
    navigate(`/product/${productId}`);
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
        <div className="row" style={{marginTop:'30px'}}>
          {data ? (
            data.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="col-md-12 col-sm-12 product-container"
              >
                <div className="products-image" style={{ flex: "1" }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="service-desc" style={{ flex: "2", marginLeft: "20px", textAlign: "left" }}>
                  <h3>{product.name}</h3>
                  <p>{product.text}</p>
                  <button
                    onClick={() => handleViewMore(product.id)}
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
