import React from 'react';
import "./Gallery.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";



export const Gallery = () => {
  return (
    <>
    <div className="gallery-container">
    <h1 className="gallery">GALLERY</h1>
    </div>

<div className="gallery-image">
<img src={img1} alt="img" className="image-item"/>
<img src={img2} alt="img" className="image-item"/>
<img src={img3} alt="img" className="image-item"/>
<img src={img4} alt="img" className="image-item"/>
<img src={img5} alt="img" className="image-item"/>
<img src={img6} alt="img" className="image-item"/>
<img src={img7} alt="img" className="image-item"/>
</div>
</>
  )
}
