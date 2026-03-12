import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-sub">
        We'd love to help you plan your next journey with Vihara.
      </p>

      <div className="contact-content">
        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="contact-details">
  <p><FaMapMarkerAlt className="icon" /> Mumbai, India</p>
  <p><FaPhoneAlt className="icon" /> +91 XXXXX XXXXX</p>
  <p><FaEnvelope className="icon" /> travel@vihara.com</p>
</div>


          <p className="contact-note">Our team will respond within 24 hours.</p>
        </div>

        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Mumbai&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Destination Interested In" />
          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
