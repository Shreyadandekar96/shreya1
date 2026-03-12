import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">

      {/* TEXT */}
      <div className="footer-text">
        Check us out:
      </div>

      {/* SOCIAL ICONS */}
      <div className="social-icons">

        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noreferrer"
          aria-label="Facebook"
          title="Facebook"
        >
          <FaFacebookF />
        </a>

        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noreferrer"
          aria-label="Twitter"
          title="Twitter"
        >
          <FaTwitter />
        </a>

        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

      </div>

    </footer>
  );
};
