import React from "react";

const About = ({ data }) => {
  // console.log(data)
  const { paragraph='', md_msg=''  } = data || {};

  return (
    <div id="about">
    <div className="container">
      <div className="row">
        
        <div className="col-xs-12 col-md-12">
          <div className="about-text">
              <h2>About Us</h2>
              <p style={{ textAlign: 'justify'}}>{paragraph || 'ESSI is a leading player in the fields of security, transportation, tolling, parking, smart card solutions, biometrics, and RF identification. Our focus is on developing customized solutions derived from the needs of our customers and leveraging cutting-edge technology in association with world leaders. We deliver effective solutions to a wide variety of terrorism-driven security challenges, ensuring a superior level of professionalism, discretion, and confidentiality. The success of ESSI Integrated Technologies is built on award-winning products, forging strong client relationships, understanding client requirements, and consistently meeting client needs. The close personal involvement of our principals in the daily operations of each account, our commitment to the highest quality service, and our aggressive cost control procedures enable us to provide the best value in the industry. ESSI has been a pioneer in application development, manufacturing, system integration, and turnkey project implementation for integrated security systems, access control, video surveillance, tolling and parking, and intelligent traffic monitoring systems. We strive to be your first choice to address your security needs swiftly and proficiently.'}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-6 col-sm-6  col-md-3 col-lg-3">
            <img src="img/main/img1.png" className="img-responsive same-size" alt="" />
          </div>
          <div className="col-xs-6 col-6 col-sm-6  col-md-3 col-lg-3">
            <img src="img/main/img2.png" className="img-responsive same-size" alt="" />
          </div>
          <div className="col-xs-6 col-6 col-sm-6  col-md-3 col-lg-3">
            <img src="img/main/img3.png" className="img-responsive same-size" alt="" />
          </div>
          <div className="col-xs-6 col-6 col-sm-6 col-md-3 col-lg-3">
            <img src="img/main/img4.png" className="img-responsive same-size" alt="" />
          </div>
        </div>
        

        <div className="row" style={{ marginTop: '30px' , textAlign:"center"}}>
          <div className="col-xs-12 col-md-12">
            <div className="about-text" style={{ textAlign:"justify"}}>
              <h3>From the MD's desk</h3>
              <div className="row">
                <div className="col-xs-8, col-12 col-sm-12  col-md-3 col-lg-3">
                  <img src="img/intro/md.png" className="img-responsive" alt="" />
                  <p style={{marginTop:'5px', marginBottom:'1px', paddingBottom:'0px'}}>The best solutions are always a few steps ahead of challenges. As our challenges have advanced, the solutions we offer have too.</p>

                </div>
                <div className="col-xs-12 col-md-9 col-lg-9" style={{paddingLeft:'30px'}}>
                <p style={{ textAlign: 'justify', marginTop:'2px', marginBottom:'0px'}}>{paragraph || 'We are committed to enhancing customer satisfaction by understanding their needs correctly, developing the most appropriate solutions, and providing superior products and systems at competitive prices.'}</p>
                <p style={{ textAlign:"justify", marginTop:'10px',marginBottom:'0px' }}>{'Our mission is to explore new horizons in application development, quality of products, service, and customer support, grounded in our experience, knowledge, and strategic alliances.'}</p>
                <p style={{ textAlign:"justify", marginTop:'10px' ,  marginBottom:'0px'}}>{'We aim to leave a significant mark on the business process and offerings through a commitment to ethics, research, and corporate social responsibility.'}</p>
                <div style={{float:'right', marginTop:'15px' , marginBottom:'0px'}}>
                  <h3 style={{ textAlign:"justify"}}>{md_msg}<b>Abhay K. Jha</b></h3>
                  <span style={{ textAlign:"justify"}}>{md_msg}<b>(CEO and MD)</b></span>
                  <br/>
                  <span style={{ textAlign:"justify"}}>{md_msg}<b>Email: abhayjha@essi.co.in</b></span>
                </div>
                
                
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
