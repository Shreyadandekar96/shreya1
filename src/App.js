import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar";
import { Offer } from "./Pages/Offer";
import { Blog } from "./Pages/Blog";
import { AboutUs } from "./Pages/AboutUs";
import { Contact } from "./Pages/Contact";
import { GalleryPage } from "./Pages/GalleryPage";
import { Action } from "./Pages/Action";
import { AnotherAction } from "./Pages/AnotherAction";
import { Something } from "./Pages/Something";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
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
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;