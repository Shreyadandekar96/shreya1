import React, { useEffect, useRef } from "react";
import "./Heading.css";
import trackingimg from "../assets/trackingman.jpg";
import car from "../assets/car.jpg";

export const Heading = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // remove if scrolls out
          }
        });
      },
      { threshold: 0.35 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to assign refs
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Heading Text */}
      <section className="heading-section">
        <h2 className="heading1">
          Power of Impressions Guaranteed Feel Extremely
        </h2>
        <p className="subheading1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          voluptates fugiat modi eveniet similique vero iste ratione quas minima
          obcaecati?
        </p>
        <h6>
          <i>Lorem ipsum dolor sit amet consectetur.</i>
        </h6>
      </section>

      {/* Section 1: Image Left, Text Right */}
      <section className="heading-container">
        <div className="heading-image slide-left" ref={addToRefs}>
          <img src={trackingimg} alt="man" className="heading-img" />
        </div>

        <div className="heading-para slide-right" ref={addToRefs}>
          <h4 className="head-title fw-bold">ROCK CLIMBING</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            iure molestiae possimus itaque corrupti voluptate deserunt quasi
            quia? Aspernatur, a..
          </p>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="heading1-container">
        <div className="heading1-para slide-left" ref={addToRefs}>
          <h4 className="head1-title fw-bold">EXTREME OFFROAD</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus animi quos omnis officiis reprehenderit fugit.
            Voluptatem asperiores sint nihil itaque!
          </p>
        </div>

        <div className="heading1-image slide-right" ref={addToRefs}>
          <img src={car} alt="car" className="car-image" />
        </div>
      </section>
    </>
  );
};