import React from "react";
import blogimg from "../assets/blog.jpg";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import "./Blog.css";
import { Navbar } from "../Components/Navbar";
export const Blog = () => {
  return (
    <>
      <section className="blog-container">
        <Navbar />
        <img src={blogimg} alt="blog1" className="blogimg" />
        <div className="blog">
          <p className="blog-subtitle">
            <em>Travel with us</em>
          </p>
          <h3 className="blog-head">BLOG</h3>
          <button className="blog-button">Sign Up</button>
        </div>
      </section>

      <section className="blog-para-head">
        <div className="section1">
          <div className="sec-text">
            <h5 className="sec-head">Ideas for active vacation</h5>
            <p className="sec-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad
              reprehenderit laborum illo! Exercitationem quidem itaque fugiat
              est eos laboriosam architecto aut numquam non possimus?
            </p>
          </div>
          <img src={blog1} alt="img1" className="sec1" />
        </div>
        <div className="section1">
          <img src={blog2} alt="img2" className="sec1" />
          <div className="sec-text">
            <h5 className="sec-head">Deep waters- is diving for everyone?</h5>
            <p className="sec-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad
              reprehenderit laborum illo! Exercitationem quidem itaque fugiat
              est eos laboriosam architecto aut numquam non possimus?
            </p>
          </div>
        </div>
        <div className="section1">
          <div className="sec-text">
            <h5 className="sec-head">Rock climbing -where to start?</h5>
            <p className="sec-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad
              reprehenderit laborum illo! Exercitationem quidem itaque fugiat
              est eos laboriosam architecto aut numquam non possimus?
            </p>
          </div>
          <img src={blog3} alt="img3" className="sec1" />
        </div>
      </section>
    </>
  );
};
