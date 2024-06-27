import React, { useState, useEffect } from "react";

// Declare grecaptcha as a global variable
/* global grecaptcha */

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
    const interval = setInterval(() => {
      if (window.recaptchaLoaded) {
        clearInterval(interval);
      }
    }, 100);

    window.verifyCallback = (token) => {
      setRecaptchaVerified(true);
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
      formDataToSend.append("data[message]", formData.message);

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
                <div id="recaptcha" className="form-group" style={{ marginBottom: '10px' }}></div>
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
                {data ? data.address : "Loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {data ? data.phone : "Loading..."}
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
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={data ? data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data ? data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data ? data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
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
