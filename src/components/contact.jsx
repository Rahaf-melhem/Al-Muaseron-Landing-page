import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";


const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact Info</h2>
                
              </div>
            
            </div>
          </div>
          <div className="container">
            <div className="contact-item">
              <h3></h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                   
                  </li>
                  <li>
  <a
    href="https://www.tiktok.com/@almuasron?_t=ZS-8u9dy2wNxOi&_r=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa fa-music"></i>
  </a>
</li>
<li>
    <a
      href="https://www.instagram.com/almuasron_qatar?igsh=bDJxaXc2d2dpZXhx&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-instagram"></i>
    </a>
  </li>
  <li>
    <a
      href="https://www.facebook.com/share/19ygd7MQ5t/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-facebook"></i>
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
