/* global grecaptcha */
import React, { useState, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = ({ data }) => {
  const [formData, setFormData] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadRecaptcha();
    window.verifyRecaptchaCallback = (token) => {
      if (token) {
        setRecaptchaVerified(true);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({ ...initialState });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!recaptchaVerified) {
        throw new Error("reCAPTCHA verification failed. Please try again.");
      }

      const token = grecaptcha.getResponse();
      console.log('reCAPTCHA token:', token);

      // Send the form data along with the reCAPTCHA token to SheetDB
      const formDataToSend = new FormData();
      formDataToSend.append("data[name]", formData.name);
      formDataToSend.append("data[email]", formData.email);
      formDataToSend.append("data[query]", formData.message);

      // Add created_date
      const createdDate = new Date().toISOString();
      formDataToSend.append("data[created_date]", createdDate);

      // Add the reCAPTCHA token
      formDataToSend.append("data[recaptcha_token]", token);

      fetch("https://sheetdb.io/api/v1/phhh0f4sh5nrf", {
        method: "POST",
        body: formDataToSend,
      })
        .then((response) => response.json())
        .then((html) => {
          console.log(html);
          setSuccessMessage("Your message was successfully sent!");
          clearForm();
          grecaptcha.reset();
          setRecaptchaVerified(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setSuccessMessage("There was an error sending your message.");
        });
    } catch (err) {
      console.error("reCAPTCHA error:", err);
      setSuccessMessage("There was an error with reCAPTCHA. Please try again.");
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              
              <div className="section-title">

                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="contactForm" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div
                  className="g-recaptcha"
                  data-sitekey="6LdjpQIqAAAAADX0TgfWh0XcB1A3s4kPW1H5vq_v"
                  data-callback="verifyRecaptchaCallback"
                  style={{ marginBottom: '10px' }}
                ></div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" disabled={!recaptchaVerified}>
                  Send Message
                </button>
                {successMessage && (
                  <div className="alert alert-success" style={{ marginTop: '10px' }}>
                    {successMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>{" "}
                {data ? data.address : "Loading..."} <br/>
                {data ? data.address1 : "Loading..."}<br/>
                {data ? data.address2 : "Loading..."}<br/>
                {data ? data.address3 : "Loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Landline
                </span>{" "}
                {data ? data.landline : "Loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-fax"></i> Fax
                </span>{" "}
                {data ? data.fax : "Loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {data ? data.email : "Loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-briefcase"></i> GST No.
                </span>{" "}
                {data ? data.gstno : "Loading..."}
              </p>
            </div>
          </div>
          <div className="col-md-12" style={{marginBottom:'30px'}}>
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a target="_blank" href={data ? data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={data ? data.linkedin : "/"}>
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
