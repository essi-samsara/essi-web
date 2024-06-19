import React from "react";

const About = ({ data }) => {
  const { paragraph, Why, Why2 } = data || {};

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <img src="img/main/2.png" className="img-responsive" alt="" />
            <img src="img/main/3.png" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-6 col-md-3">
            <img src="img/main/4.png" className="img-responsive" alt="" />
            <img src="img/main/5.png" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{paragraph || "loading..."}</p>
              {/* <h3>Why Choose Us?</h3> */}
              {/* <div className="list-style row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <ul>
                    {Why
                      ? Why.map((item, index) => (
                          <li key={`why1-${index}`}>{item}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <ul>
                    {Why2
                      ? Why2.map((item, index) => (
                          <li key={`why2-${index}`}>{item}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-xs-12 col-md-4">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>Replace with appropriate content for Our Mission </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="about-text">
              <h3>Achievements</h3>
              <p>Replace with appropriate content for Achievements </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="about-text">
              <h3>Achievements</h3>
              <p>Replace with appropriate content for Achievements </p>
            </div>
          </div>
        </div>

        {/* <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>Our Philosophy</h3>
              <p>Replace with appropriate content for Our Philosophy </p>
            </div>
          </div>
        </div> */}

        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>Message from the CEO</h3>
              <p>Replace with appropriate content for Message from the CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
