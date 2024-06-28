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
              <p style={{ textAlign: 'justify'}}>{paragraph || "ESSI is a leading player in the fields of security, transportation, tolling, parking, smart card solutions, biometrics, and RF identification. Our focus is on developing customized solutions derived from the needs of our customers and leveraging cutting-edge technology in association with world leaders. We deliver effective solutions to a wide variety of terrorism-driven security challenges, ensuring a superior level of professionalism, discretion, and confidentiality. The success of ESSI Integrated Technologies is built on award-winning products, forging strong client relationships, understanding client requirements, and consistently meeting client needs. The close personal involvement of our principals in the daily operations of each account, our commitment to the highest quality service, and our aggressive cost control procedures enable us to provide the best value in the industry. ESSI has been a pioneer in application development, manufacturing, system integration, and turnkey project implementation for integrated security systems, access control, video surveillance, tolling and parking, and intelligent traffic monitoring systems. We strive to be your first choice to address your security needs swiftly and proficiently."}</p>
              
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px', gap:'10px' }}>
          <div className="col-xs-12 col-md-4" style={{padding:'10px'}}>
          <div className="about-text" style={{ border: '1px solid black', padding: '10px',paddingBottom:'55px', borderRadius: '7px' , backgroundColor: '#FFF8F8' }}>
          <h3>Our Mission</h3>
              <p style={{ textAlign: 'justify'}}>We are committed to become the unswerving provider of efficient integrated security solutions by furnishing our ability to formulate new technologies and produce value for our customers, employees and partners.

</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4" style={{padding:'10px'}}>
          <div className="about-text" style={{ border: '1px solid black', padding: '10px', borderRadius: '7px' , backgroundColor: '#FFF8F8' }}>
              <h3>Achievements</h3>
              <p style={{ textAlign: 'justify'}}>Our achievements include successfully implementing security systems for high-profile locations such as the Prime Minister’s Residence, Parliament House Complex, and Delhi International Airport. We have been recognized for our innovation and excellence in security systems integration by various prestigious organizations.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4" style={{padding:'10px'}}>
          <div className="about-text" style={{ border: '1px solid black', padding: '10px',paddingBottom:'36px', borderRadius: '7px', backgroundColor: '#FFF8F8' }}>
          <h3>Why Choose ESSI ?</h3>
              <p style={{ textAlign: 'justify'}}>Recognized for our pioneering efforts in security and automation.
Extensive knowledge across various security domains.
Serving government, defense, and private sector clients.
Utilizing the latest technologies to deliver superior solutions.
Tailored to meet the requirement of each client

 </p>
            </div>
          </div>
        </div>

        

        <div className="row" style={{ marginTop: '30px' , textAlign:"center"}}>
          <div className="col-xs-12 col-md-12">
            <div className="about-text" style={{ textAlign:"justify"}}>
              <h3>Message from the CEO</h3>
              <p style={{ textAlign:"justify"}}>“We are committed to enhancing customer satisfaction by understanding their needs correctly, developing the most appropriate solutions, and providing superior products and systems at competitive prices. Our mission is to explore new horizons in application development, quality of products, service, and customer support, grounded in our experience, knowledge, and strategic alliances. We aim to leave a significant mark on the business process and offerings through a commitment to ethics, research, and corporate social responsibility.”<br></br><b>– Abhay K. Jha, CEO and MD</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
