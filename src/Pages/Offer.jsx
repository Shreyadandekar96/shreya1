import React from "react";
import "./Offer.css";
import mount1 from "../assets/mount1.jpg";
import sea2 from "../assets/sea2.jpg";
import car3 from "../assets/car3.jpg";

export const Offer = () => {
  return (
    <section className="offer-image-container">
      <div className="offer">
        <img src={mount1} alt="1" className="offer-image" />

        <div className="offer-text">
          <h3 className="offer-heading">Mountain Adventure</h3>
          <p className="offer-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            earum modi eaque natus explicabo vero nostrum. Sint minus tenetur
            sit illum explicabo laborum tempore, eaque molestias cumque corrupti
            ipsa dicta esse. Illum atque natus optio?
          </p>
          <h6 className="head-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae!
          </h6>
          <p className="offer-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            iste odit quaerat tenetur? Amet dolor rem mollitia enim.
            Exercitationem autem iure temporibus quidem repellat nesciunt dicta,
            dolorem tempora facere ipsum saepe sit officiis sint, et quo nulla
            ex fuga voluptatem!
          </p>
          <button className="offer-btn ">OFFER%</button>
        </div>
      </div>

      <div className="offer">
       

        <div className="offer-text">
          <h3 className="offer-heading">Sea Exploration</h3>
          <p className="offer-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            earum modi eaque natus explicabo vero nostrum. Sint minus tenetur
            sit illum explicabo laborum tempore, eaque molestias cumque corrupti
            ipsa dicta esse. Illum atque natus optio? illum iste laborum
            veritatis ratione at.
          </p>
          <h6 className="head-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae!
          </h6>
          <p className="offer-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            iste odit quaerat tenetur? Amet dolor rem mollitia enim.
            Exercitationem autem iure temporibus quidem repellat nesciunt dicta,
            dolorem tempora facere ipsum saepe sit officiis sint, et quo nulla
            ex fuga voluptatem!
          </p>
          <button className="offer-btn ">OFFER%</button>
        </div>
         <img src={sea2} alt="2" className="offer-image" />
      </div>

      <div className="offer">
        <img src={car3} alt="3" className="offer-image" />

        <div className="offer-text">
          <h3 className="offer-heading">Offroad Trips</h3>
          <p className="offer-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            earum modi eaque natus explicabo vero nostrum. Sint minus tenetur
            sit illum explicabo laborum tempore, eaque molestias cumque corrupti
            ipsa dicta esse. Illum atque natus optio?ugiat consequatur ea
            voluptatem hic possimus.
          </p>
          <h6 className="head-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae!
          </h6>
          <p className="offer-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            iste odit quaerat tenetur? Amet dolor rem mollitia enim.
            Exercitationem autem iure temporibus quidem repellat nesciunt dicta,
            dolorem tempora facere ipsum saepe sit officiis sint, et quo nulla
            ex fuga voluptatem!
          </p>

          <button className="offer-btn ">OFFER%</button>
        </div>
      </div>
    </section>
  );
};
