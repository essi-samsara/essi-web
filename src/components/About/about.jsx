import React from "react";

const About = ({ data }) => {
  const { paragraph, Why, Why2 } = data || {};

  return (
    <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <img src="img/main/img1.png" className="img-responsive same-size" alt="" />
          <img src="img/main/img3.png" className="img-responsive same-size" alt="" />
        </div>
        <div className="col-xs-6 col-md-3">
          <img src="img/main/img4.png" className="img-responsive same-size" alt="" />
          <img src="img/main/img2.png" className="img-responsive same-size" alt="" />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
  
              <h2>About Us</h2>
              <p>{paragraph || "ESSI is a leading player in the Security, Transportation, Tolling, Parking, Smart Card Solution, Biometrics and RF Identification. Our focus is to develop customized solutions derived from the needs of the customer & the knowledge of cutting edge technology in association with the world leaders. We deliver effective solutions to a wide variety of terrorism-driven security challenges. We go to great lengths to guarantee a superior level of professionalism, discretion and confidentiality. The success of ESSI Integrated Technologies is based on award winning products, forging client relationships, understanding client’s requirements, meeting client’s needs consistently.The close personal involvement of our principles in the daily operation of each account, our commitment to the highest quality service, and our aggressive cost control procedures enable us to provide the best value in the industry. ESSI has been a pioneer in Application Development, Manufacturing, System Integration and Turn Key Project implementation for Integrated Security System, Access Control, Video Surveillance, Tolling and Parking & Intelligent Traffic Monitoring System.ESSI strives for to be your first choice to address your security needs swiftly and proficiently."}</p>
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

        <div className="row" style={{ marginTop: '30px', gap:'10px' }}>
          <div className="col-xs-12 col-md-4" style={{padding:'10px'}}>
          <div className="about-text" style={{ border: '1px solid black', padding: '10px',paddingBottom:'55px', borderRadius: '7px' , backgroundColor: '#FFF8F8' }}>
          <h3>Our Mission</h3>
              <p>We are committed to become the unswerving provider of efficient integrated security solutions by furnishing our ability to formulate new technologies and produce value for our customers, employees and partners.

</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4" style={{padding:'10px'}}>
          <div className="about-text" style={{ border: '1px solid black', padding: '10px', borderRadius: '7px' , backgroundColor: '#FFF8F8' }}>
              <h3>Achievements</h3>
              <p>Our achievements include successfully implementing security systems for high-profile locations such as the Prime Minister’s Residence, Parliament House Complex, and Delhi International Airport. We have been recognized for our innovation and excellence in security systems integration by various prestigious organizations.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4" style={{padding:'10px'}}>
          <div className="about-text" style={{ border: '1px solid black', padding: '10px',paddingBottom:'36px', borderRadius: '7px', backgroundColor: '#FFF8F8' }}>
          <h3>Why Choose ESSI ?</h3>
              <p>Recognized for our pioneering efforts in security and automation.
Extensive knowledge across various security domains.
Serving government, defense, and private sector clients.
Utilizing the latest technologies to deliver superior solutions.
Tailored to meet the requirement of each client

 </p>
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
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h3>Message from the CEO</h3>
              <p>“We are committed to enhancing customer satisfaction by understanding their needs correctly, developing the most appropriate solutions, and providing superior products and systems at competitive prices. Our mission is to explore new horizons in application development, quality of products, service, and customer support, grounded in our experience, knowledge, and strategic alliances. We aim to leave a significant mark on the business process and offerings through a commitment to ethics, research, and corporate social responsibility.”– Abhay K. Jha, CEO and MD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
