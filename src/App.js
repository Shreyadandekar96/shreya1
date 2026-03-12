// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
// import { About } from "./Pages/About";
import { Navbar } from "./Components/Navbar";
import { Offer } from "./Pages/Offer";
import { Blog } from "./Pages/Blog";
import { AboutUs } from "./Pages/AboutUs";
import { Contact } from "./Pages/Contact";
import {GalleryPage} from "./Pages/GalleryPage";
import { Action } from "./Pages/Action";
import { AnotherAction } from "./Pages/AnotherAction";
import { Something } from "./Pages/Something";
// import { HeroImage } from "./Components/HeroImage";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/action" element={<Action />} />
        <Route path="/AnotherAction" element={<AnotherAction />} />
        <Route path="/something" element={<Something />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
