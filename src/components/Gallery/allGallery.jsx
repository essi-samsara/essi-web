import React from "react";
import { Image } from "../image";

const AllGallery = ({ data }) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data
              ? data.map((item, index) => (
                  <div key={`${item.title}-${index}`} className="col-sm-6 col-md-4 col-lg-4">
                    <Image
                      title={item.title}
                      largeImage={item.largeImage}
                      smallImage={item.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGallery;
